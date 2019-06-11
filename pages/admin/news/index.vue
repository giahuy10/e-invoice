<template>
  <div class="orders">
    <h3>Tax News</h3>
    <b-button variant="outline-primary" to="/admin/news/edit/0">Create</b-button>

    <b-table
      responsive
      striped
      hover
      :items="items"
      :fields="fields"
      :busy="isBusy"
      >

      <div slot="table-busy" class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Loading...</strong>
      </div>

      <!-- Add edit link to title -->
      <template slot="title" slot-scope="data">
        <nuxt-link :to="'/admin/news/edit/'+data.item.id">{{ data.value }}</nuxt-link>

      </template>

      <!-- Format created Date -->
      <template slot="createdAt" slot-scope="data">
        {{ data.value | moment("dddd, MMMM Do YYYY") }}
      </template>

      <!-- Format status field -->
      <template slot="state" slot-scope="data">
        {{ data.value ? 'Active' : 'Inactive' }}
      </template>

       <!-- Add tool -->
      <template slot="tool" slot-scope="data">
        <fa icon="trash" @click="removeItem(data.item.id)"/>
      </template>

    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      @change="changePage"
      limit="10"
      class="float-left"
    ></b-pagination>
    <b-form-group label-cols-sm="2" label="" class="mb-0 float-right">
      <b-form-select v-model="perPage" :options="pageOptions" @change="getItems"></b-form-select>
    </b-form-group>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  mounted () {
    this.getItems ()
  },
  methods: {
    getItems () {
      this.isBusy = true
      this.$axios.get(`/api/news?perPage=${this.perPage}&currentPage=${this.currentPage}`)
        .then(res => {
          console.log(res)
          this.items = res.data.result
          this.rows = res.data.count
          this.isBusy = false
        })
    },
    changePage (page) {
      this.currentPage = page
      this.getItems()
    },
    removeItem (id) {
      // ASK before deleting
      this.$axios.delete(`/api/news/${id}`)
        .then(res => {
          console.log(res)
          this.getItems()
        })
        .catch(err => console.log(err.response))
    }
  },
  data () {
    return {
      isBusy: false,
      items: [],
      currentPage: 1,
      perPage: 20,
      pageOptions: [ 5, 10, 20, 50, 100],
      rows: 0,
      fields: [
        {
          key: 'id',
          label: '#ID',
          sortable: true
        },
        {
          key: 'title',
          label: 'Title',
          sortable: true
        },
        {
          key: 'createdAt',
          label: 'Date created',
          sortable: true
        },
        {
          key: 'state',
          label: 'Status',
          sortable: true
        },
        {
          key: 'tool',
          label: 'Tool'
        }
      ]
    }
  }
}
</script>
