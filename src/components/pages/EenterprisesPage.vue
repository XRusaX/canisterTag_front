<template>
  <div >
    <company-table table-type="company" @company-event="changeCompany"></company-table>
    <quota-table :company="company" table-type="company"></quota-table>
    <rf-id-label-table table-type="company"></rf-id-label-table>
  </div>
</template>

<script>
import companyTable from "../tables/CompanyTable.vue";
import quotaTable from "../tables/QuotaTable.vue";
import rfIdLabelTable from "../tables/RfidLabelTable.vue";

export default {
  name: "companys",
  components: {
    companyTable,
    quotaTable,
    rfIdLabelTable
  },
  props: {
  },
  methods: {
    changeCompany(name) {
      this.company = name
      console.log("Получил эвент компании = " + name);
    },
  },
  created() {
    this.$emit("page-name", "Предприятия")
  },
  data() {
    return {
      company: "",
      columns: [
        {
          label: "Название",
          field: "name"
        }
      ],
      rows: []
    };
  }
};
</script>

<style>
</style>