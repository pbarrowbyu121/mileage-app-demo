<template>
  <div class="text-krona-one">
    <q-card
      v-for="car in cars"
      :key="car.id"
      class="my-card q-ma-md"
      @click="goToCar(car.id)"
    >
      <q-img :src="car.image" basic>
        <div class="absolute-bottom text-subtitle1 text-center">
          "{{ car.nickname }}""
        </div>
      </q-img>

      <q-card-section class="text-center">
        {{ car.year }} {{ car.make }} {{ car.model }}
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col">Mileage:</div>
          <div class="col">{{ carMPG(car).mpg }} mpg</div>
        </div>
        <div class="row">
          <div class="col">Total Miles:</div>
          <div class="col">{{ carMPG(car).totalMiles }}</div>
        </div>
      </q-card-section>
    </q-card>
    <div class="text-center q-my-md">
      <q-btn
        outline
        rounded
        color="primary"
        label="Add New Car"
        @click="newCarDialogToggle"
      />
    </div>
    <!-- New Car Dialog -->
    <q-dialog v-model="newCarDialog">
      <NewCarDialog />
    </q-dialog>
  </div>
</template>

<script>
import NewCarDialog from "../components/NewCarDialog";
import { calcMPG } from "../../utilFunctions";
export default {
  name: "PageIndex",
  data() {
    return {
      newCarDialog: false
    };
  },
  methods: {
    goToCar(id) {
      console.log("goToCar activated");
      this.$router.push({ path: `car/${id}` });
    },
    newCarDialogToggle() {
      console.log("add car dialog toggle");
      this.newCarDialog = true;
    },
    carMPG(car) {
      let tanks = this.$store.state.carstore.tanks.filter(
        tank => tank.vin === car.vin
      );
      if (tanks.length > 0) {
        return { mpg: calcMPG(tanks), totalMiles: tanks[0].odometer };
      } else {
        return null;
      }
    }
  },
  components: {
    NewCarDialog
  },
  computed: {
    cars() {
      return this.$store.state.carstore.cars;
    }
  }
};
</script>
