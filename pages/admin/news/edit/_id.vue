<template>
  <div class="edit-event">
    <h2>{{ item && item.id ? 'Update news' : 'Create news'}}</h2>
    <form action="" v-on:submit.prevent="saveData">

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="item.title" placeholder="Enter title">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
              <no-ssr>
                <editor v-model="item.description" :toolbar="toolbar" api-key="lxzv6h8kur0syil9hllrjlm94wtumcz3fy6ea2jc0inlsmnb" :init="init"></editor>
              </no-ssr>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Thumbnail</label>
            <div class="col-sm-10">
              <input type="file" class="form-control" placeholder="" ref="file" v-on:change="handleFileUpload()">
              <div v-if="err" class="alert alert-warning" v-text="err">

              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-12">
              <div v-if="loading">
                <img style="width: 40px;" src="https://www.wpfaster.org/wp-content/uploads/2013/06/circle-loading-gif.gif" alt="">
              </div>
              <img v-if="item.thumbnail" style="width: 200px;" :src="item.thumbnail" alt="">
            </div>
          </div>
          <b-form-group label="">
            <b-form-radio-group
              id="btn-radios-1"
              v-model="item.state"
              :options="stateOptions"
              buttons
              name="radios-btn-default"
              button-variant="outline-primary"
            ></b-form-radio-group>
          </b-form-group>

      <div class="alert alert-success" v-if="saved">Saved!</div>
      <button class="btn btn-success btn-block" @click.prevent="saveData">Save</button>
    </form>
  </div>
</template>
<script>

import Editor from '@tinymce/tinymce-vue'
export default {

  components: {
    'editor': Editor
  },
  data () {
    return {
      //_id: 0,
      saved: false,
      loading: false,
      item: {
        //_id: 0,
        state: 1,
        homepage: 0,
        title: '',
        description: '',
        thumbnail: '',
        slug: ''
      },
      err: '',
      stateOptions: [
        { text: 'Active', value: 1 },
        { text: 'Inactive', value: -1 }
      ],
      init: {
        plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help',
        images_upload_url: 'http://observationdeck.lottecenter.com.vn/api/events/upload?editor=true',

      },

      toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',
    }
  },
  layout: 'admin',

  mounted () {
    this.getItem()
  },
  methods: {
    getItem () {
      this.$axios.get('/api/news/'+this.$route.params.id)
        .then(res => {
          if (res.data) {
            this.item = res.data
          }
        })
        .catch(err => console.log(err.response))
    },
    handleFileUpload () {
      this.err = ''
      this.loading = true
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('type', 'poster')
      this.$axios.post( '/api/news/upload', formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
        ).then(res => {
          console.log(res)
          this.item.thumbnail = res.data.location
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          this.err = err.response.data.error
          console.log(err.response)
        })
    },
    saveData () {
      this.saved = false
      if (this.$route.params.id != 0) {
        console.log('update item')
        console.log(this.item)
        this.$axios.put('/api/news/'+this.item.id, this.item)
        .then(res => {
          this.saved = true
        })
        .catch(err => console.log(err.response))
      } else {
        console.log('insert item')
        this.$axios.post('/api/news', this.item)
        .then(res => {
          console.log(res)
          this.saved = true
          this.$router.push({path: `/admin/news/edit/${res.data.id}` })
        })
        .catch(err => console.log(err.response))
      }

    }
  }
}
</script>
