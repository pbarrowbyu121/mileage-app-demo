<template>
  <div class="text-krona-one">
    <q-img
      src="https://cars.usnews.com/static/images/Auto/izmo/321536/2010_honda_civic_sdn_angularfront.jpg"
    >
      <div class="absolute-bottom text-subtitle1 text-center">
        "Max"
      </div>
    </q-img>
    <q-card class="my-card">
      <q-btn
        flat
        round
        color="grey"
        icon="edit"
        @click="editCar"
        class="absolute-top-right"
        style="z-index: 1"
      />
      <q-card-section>
        <div class="row">
          <div class="col">Year:</div>
          <div class="col">2010</div>
        </div>
        <div class="row">
          <div class="col">Make:</div>
          <div class="col">Honda</div>
        </div>
        <div class="row">
          <div class="col">Model:</div>
          <div class="col">Civic</div>
        </div>
        <div class="row">
          <div class="col">Color:</div>
          <div class="col">Silver</div>
        </div>
        <div class="row">
          <div class="col">Mileage:</div>
          <div class="col">34 mpg</div>
        </div>
        <div class="row">
          <div class="col">License:</div>
          <div class="col">123 ABC</div>
        </div>
        <div class="row">
          <div class="col">VIN:</div>
          <div class="col">FAKE123VIN456</div>
        </div>
      </q-card-section>
    </q-card>
    <TanksTable />
    <div class="text-center q-my-md">
      <q-btn
        outline
        rounded
        color="primary"
        label="Add Tank"
        @click="addTankDialogToggle"
      />
    </div>
    <!-- New Tank Dialog -->
    <q-dialog v-model="newTankPopup">
      <NewTankDialog />
    </q-dialog>
  </div>
</template>

<script>
import TanksTable from "../components/TanksTable";
import NewTankDialog from "../components/NewTankDialog";

export default {
  name: "CarPage",
  data() {
    return {
      newTankPopup: false
    };
  },
  methods: {
    editCar() {
      console.log("editCar pushed");
    },
    addTankDialogToggle() {
      console.log("newTankPopup triggered");
      this.newTankPopup = true;
    }
  },
  components: {
    TanksTable,
    NewTankDialog
  }
};
</script>

<style></style>
