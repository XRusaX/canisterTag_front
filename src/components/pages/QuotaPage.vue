<template>
  <div >
    <h5 class="h5 col">Зарегестрированные предприятия</h5>
    <table-component
        ref="agentTable"

        type="agent"

        :heroes="quotaGridData"
        :columns="quotaGridColumns"

        @select-event="selectQuotaEvent"
        @save-event="saveQuotaEvent"
        @delete-event="deleteQuotaEvent"
    />
    <!--    <div v-click-outside="onClickOutsideAgents"></div>-->
  </div>
</template>

<script>
import QuotaDataService from "@/services/QuotaDataService";
import TableComponent from "../other/TableComponent";

export default {
  name: "companys",
  components: {
    TableComponent
  },
  props: {
  },
  methods: {
    loadQuotaGridData() {
      QuotaDataService.getAll()
          .then((response) => {
            console.log(response.data)
            this.enterprisesGridData = response.data
          })
          .catch(error => console.log(error))


      // this.$refs.agentModal.flush()
    },
    selectQuotaEvent() {
    },
    saveQuotaEvent(actualQuota) {
      QuotaDataService.save(actualQuota)
          .then(() => {
            this.loadEnterprisesGridData()
          })
          .catch(error => console.log(error))
    },
    deleteQuotaEvent(actualQuota) {
      QuotaDataService.delete(actualQuota.id)
          .then(() => {
            this.loadEnterprisesGridData()
          })
          .catch(error => console.log(error))
    },
    changeCompany(name) {
      this.company = name
      console.log("Получил эвент компании = " + name);
    },
  },
  created() {
    this.loadQuotaGridData()
    this.$emit("page-name", "Квоты")
  },
  data() {
    return {
      quotaGridData: [],
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