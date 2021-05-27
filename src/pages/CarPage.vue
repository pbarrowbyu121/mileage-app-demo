<template>
  <div v-if="car" class="text-krona-one">
    <q-img :src="car.image">
      <div class="absolute-bottom text-subtitle1 text-center">
        "{{ car.nickname }}"
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
          <div class="col">{{ car.year }}</div>
        </div>
        <div class="row">
          <div class="col">Make:</div>
          <div class="col">{{ car.make }}</div>
        </div>
        <div class="row">
          <div class="col">Model:</div>
          <div class="col">{{ car.model }}</div>
        </div>
        <div class="row">
          <div class="col">Color:</div>
          <div class="col">{{ car.color }}</div>
        </div>
        <div class="row">
          <div class="col">Mileage:</div>
          <div class="col">34 mpg</div>
        </div>
        <div class="row">
          <div class="col">License:</div>
          <div class="col">{{ car.license }}</div>
        </div>
        <div class="row">
          <div class="col">VIN:</div>
          <div class="col">{{ car.vin }}</div>
        </div>
      </q-card-section>
    </q-card>
    <TanksTable v-if="tanks && tanks.length > 0" :tanks="tanks" />
    <div class="text-center q-my-md">
      <q-btn
        outline
        rounded
        color="primary"
        label="Add Tank"
        @click="addTankDialogToggle"
      />
    </div>
    <div class="text-center q-my-md">
      <q-btn rounded color="negative" label="Delete Car" @click="deleteCar" />
    </div>
    <!-- New Tank Dialog -->
    <q-dialog v-model="newTankPopup">
      <NewTankDialog :car="car" />
    </q-dialog>
    <!-- Edit Car Dialog -->
    <q-dialog v-model="editCarPopup">
      <EditCarDialog :car="car" />
    </q-dialog>
  </div>
</template>

<script>
import TanksTable from "../components/TanksTable";
import NewTankDialog from "../components/NewTankDialog";
import EditCarDialog from "../components/EditCarDialog";
import { mapActions } from "vuex";

export default {
  name: "CarPage",
  data() {
    return {
      newTankPopup: false,
      editCarPopup: false
    };
  },
  props: ["id"],
  methods: {
    ...mapActions("carstore", [
      "getCarsAction",
      "getTanksAction",
      "deleteTanksAction",
      "deleteCarAction"
    ]),
    deleteCar() {
      console.log("Delete Car", this.id);
      if (this.tanks) {
        let deleteTanksArr = this.tanks.map(tank => tank.id);
        deleteTanksArr.forEach(id => {
          this.deleteTanksAction;
        });
      }
      this.deleteCarAction(this.car.id)
        .then(response => this.getCarsAction())
        .then(response => this.$router.push({ path: "/" }));
    },
    editCar() {
      console.log("editCar pushed");
      this.editCarPopup = true;
    },
    addTankDialogToggle() {
      console.log("newTankPopup triggered");
      this.newTankPopup = true;
    }
  },
  computed: {
    car() {
      return this.$store.state.carstore.cars.filter(
        car => car.id === this.id
      )[0];
    },
    tanks() {
      const carVin = this.$store.state.carstore.cars.filter(
        car => car.id === this.id
      )[0].vin;
      return this.$store.state.carstore.tanks.filter(
        tank => tank.vin === carVin
      );
    }
  },
  components: {
    TanksTable,
    NewTankDialog,
    EditCarDialog
  }
};
</script>

<style></style>
