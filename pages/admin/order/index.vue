<template>
  <div class="orders">
    <h3>Orders list</h3>
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
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      @change="changePage"
      limit="10"
    ></b-pagination>
    <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
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
      this.$axios.get(`/api/orders&pageSize=${this.perPage}&page=${this.currentPage}`)
        .then(res => {
          console.log(res)
          this.items = res.data.items
          this.rows = res.data.totalResults
          this.isBusy = false
        })
    },
    changePage (page) {
      this.getItems()
    }
  },
  data () {
    return {
      isBusy: false,
      items: [],
      currentPage: 1,
      perPage: 20,
      pageOptions: [ 10, 20, 50, 100],
      rows: 0,
      fields: [
        {
          key: 'id',
          label: '#Order number',
          sortable: true,
          // variant: 'danger'
        },
        {
          key: 'client',
          label: 'Client',
          sortable: true,
          // variant: 'danger'
        },
        {
          key: 'date',
          label: 'Order date',
          sortable: true,
          // variant: 'danger'
        },
        {
          key: 'quantity',
          label: 'Quantity',
          sortable: true,
          // variant: 'danger'
        },
        {
          key: 'price',
          label: 'Price',
          // sortable: true,
          // variant: 'danger'
        },
        {
          key: 'total',
          label: 'Total',
          sortable: true,
          // variant: 'danger'
        },
        {
          key: 'status',
          label: 'Status',
          sortable: true,
          // variant: 'danger'
        }
      ]
    }
  }
}
</script>
