<template>
  <div>
    <div class="uk-width-expand" uk-grid>
      <div class="uk-width-1-2@m">
        <h5 class="h5" v-if="$store.state.workMode != undefined">{{ $store.state.workMode.name }}</h5>
      </div>
    </div>


    <div class="uk-inline uk-flex uk-align-center" uk-grid>
      <div>
        <span class="" uk-icon="icon: paint-bucket; ratio: 15"></span>
      </div>


      <!--        <div v-for="field in mainData" :key="field.name">-->

      <!--            {{field.name}}-->
      <!--            <form class="uk-margin uk-margin-top uk-search uk-search-default uk-align-right uk-disabled">-->
      <!--              <input v-model="filterKey" type="search" class="uk-search-input" :placeholder='agent[field.field]'>-->
      <!--            </form>-->

      <form class="uk-form-horizontal uk-align-right uk-width-1-2 uk-container uk-box-shadow-small ">
        <div class="uk-margin uk-padding-small">
        <div class="uk-margin " uk-grid>
          <div>
            <h5 class="h5">Основные параметры</h5>
          </div>
        </div>

        <div v-for="field in $store.state.fields" :key="field.name">

          <div class="uk-margin">
            <label uk-leader="fill: ." class="uk-form-label uk-margin" :for='[field.name]'>{{ field.name }}:</label>
            <div class="uk-form-controls">

<!--              <input v-if="change"  class="uk-input" :id="[field.name]" type="text" :placeholder='$store.state.workMode[field.field]'>-->
<!--              <label v-if="!change" class="uk-form-label uk-margin" :for='[field.name]'>{{$store.state.workMode[field.field] }}</label>-->
              <input v-if="change"  class="uk-input" :id="[field.name]" type="text" :placeholder='typeof $store.state.workMode[field.field] == "object" ? $store.state.workMode[field.field].name : $store.state.workMode[field.field]'>
              <label v-if="!change" class="uk-form-label uk-margin" :for='[field.name]'>{{ typeof $store.state.workMode[field.field] == "object" ? $store.state.workMode[field.field].name : $store.state.workMode[field.field] }}</label>
            </div>

        </div>
        </div>

        <button v-if="!change" type="button" class="uk-button uk-button-primary uk-margin uk-border-rounded" @click="click()">Изменить</button>
        <button v-if="change" type="button" class="uk-button uk-button-primary uk-margin uk-border-rounded" @click="click()">Сохранить</button>

        <a type="button" class="uk-button uk-button-danger uk-align-right uk-margin uk-border-rounded" href="#modal-center" uk-toggle>Удалить</a>
          <div id="modal-center" class="uk-flex-top" uk-modal>
            <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-border-rounded">

              <button class="uk-modal-close-default" type="button" uk-close></button>

              <p class="uk-text-center">Удалить это средство?</p>

              <button class="uk-button uk-button-primary uk-modal-close uk-border-rounded" type="button" @click="click()">Подтвердить</button>
              <button class="uk-button uk-button-danger uk-modal-close uk-align-right uk-border-rounded" type="button">Отменить</button>
            </div>
          </div>

        </div>
      </form>


    </div>

    <!--    <div>-->


    <!--      <button type="button" class="uk-button" @click="click">Чекай допы</button>-->

    <!--    </div>-->

        <form class="uk-form-horizontal uk-margin">
          <div class="uk-margin-large">
            <h5 class="h5">Дополнительные параметры</h5>
          </div>

          <div v-for="field in workModeAdditionalData" :key="field.name">

            <div class="uk-margin">
              <label class="uk-form-label" for="form-additional-text">{{field.name}}</label>
              <div class="uk-form-controls">
                <input class="uk-input" id="form-additional-text" type="text" :placeholder='$store.state.workMode[field.field]'>
              </div>
            </div>

          </div>

        </form>

    <div class="dropdown-divider"></div>

<!--    <div v-if="!workModeGridData" class="uk-flex uk-align-center">-->
<!--      <h5 class="h5 col">Режимы работы отсутствуют</h5>-->

<!--      <button class="uk-text-nowrap uk-flex-right uk-border-rounded uk-button uk-button-secondary uk-button-small uk-card" @click="createEvent" title="Создать">-->
<!--        Добавить-->
<!--      </button>-->
<!--    </div>-->
<!--    <div v-if="workModeGridData">-->
<!--    <h5 class="h5 col">Режимы работы</h5>-->
    <!--  <table-component-->
    <!--      ref="workModeTable"-->

    <!--      type="workMode"-->

    <!--      :additionalData="workModeAdditionalData"-->
    <!--      :heroes="workModeGridData"-->
    <!--      :columns="workModeGridColumns"-->
    <!--      :data="selectedAgent"-->
    <!--      :admin-mode="adminMode"-->

    <!--      @select-event="selectWorkModeEvent"-->
    <!--      @save-event="saveWorkModeEvent"-->
    <!--      @delete-event="deleteWorkModeEvent"-->
    <!--  />-->

    </div>
<!--  </div>-->
</template>

<script>
// import WorkModeService from "@/services/WorkModeService";
// import TableComponent from "@/components/other/TableComponent";

export default {
  name: "AgentProfilePage",

  props: {
  },
  components: {
    // TableComponent,
  },
  emits: {
    deleteEvent: {},
  },


  computed: {
  },


  // СДЕЛАТЬ МУТАЦИЮ НА ДОБАВЛЕНИЕ АГЕНТА
  // ЗАПУСКАТЬ МУТАЦИЮ ПО КНОПКЕ ОТКРЫТЬ
  // ПРОВЕРКА ЛОГИРОВАНИЕМ И ОБНОВЛЕНИЕМ
  methods: {

    selectWorkModeEvent() {

    },
    saveWorkModeEvent() {

    },
    deleteWorkModeEvent() {

    },
    click() {
      this.change = !this.change
    },

    // loadWorkModes() {
    //
    //
    //   WorkModeService.getAll(this.$store.state.agent)
    //       .then((response) => {
    //         this.workModeGridData = response.data
    //       })
    //       .catch(error => console.log(error))
    // },

  },

  mounted() {
    console.log("Режим работы", this.$store.state.workMode)
    console.log("Режим работы поля", this.$store.state.fields)

    // this.loadWorkModes()
  },

  data() {
    return {
      myAgent:{},
      myAdditional:{},
      myMainData:{},
      change: false,
      workModes: [],
      workModeGridData: [],
      workModeGridColumns: [
        {
          name: 'Название',
          field: 'name',
          type: 'name'
        },
        {
          name: 'Расход',
          field: 'can_consumption_ml_m3',
          type: 'unic',
          unicEnding: 'мл/м3'
        },
        {
          // name: 'Экспозиция, сек',
          name: 'Экспозиция',
          field: 'can_exposure_sec',
          type: 'unic',
          unicEnding: 'сек'
        },
        {
          // name: 'Проветривание, сек',
          name: 'Проветривание',
          field: 'can_airing_sec',
          type: 'unic',
          unicEnding: 'сек'
        },
        {
          name: 'Средство',
          field: 'agent',
          type: 'obj'
        },
      ],
      workModeAdditionalData: [
        {
          name: 'Уникальный номер',
          field: 'uid',
          type: 'name'
        },
        {
          name: 'Период импульса, сек',
          field: 'can_impulse_period_sec',
        },
        {
          name: 'Ширина импульса, сек',
          field: 'can_inpulse_width_sec',
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>