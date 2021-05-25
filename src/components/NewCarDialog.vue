<template>
  <q-card class="my-card text-krona-one">
    <q-card-section>
      <div>Add New Car</div>
    </q-card-section>

    <q-card-section>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <!-- Year -->
        <q-select
          filled
          v-model="year"
          :options="yearOptions"
          label="Year"
          dense
        />
        <!-- Make -->
        <q-select
          filled
          v-model="make"
          :options="makeOptions"
          label="Make"
          dense
        />
        <!-- Model -->
        <q-select
          filled
          v-model="model"
          :options="modelOptions"
          label="Model"
          dense
        />
        <!-- Color -->
        <q-input filled v-model="color" label="Color" dense />
        <!-- VIN -->
        <q-input filled v-model="vin" label="VIN" dense />
        <!-- License -->
        <q-input filled v-model="license" label="License" dense />
        <!-- Nickname -->
        <q-input filled v-model="nickname" label="Nickname" dense />
        <!-- Image -->
        <q-input filled v-model="image" label="Image" dense />

        <q-card-actions align="right">
          <q-btn
            v-close-popup
            flat
            color="primary"
            type="submit"
            label="Submit"
          />
          <q-btn v-close-popup flat color="primary" label="Cancel" />
        </q-card-actions>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { uid } from "quasar";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      year: null,
      make: null,
      model: null,
      color: null,
      vin: null,
      nickname: null,
      license: null,
      image: null,
      yearOptions: [2018, 2019, 2020, 2021],
      makeOptions: ["Honda", "Tesla", "Nissan"],
      modelOptions: ["Civic", "Roadster", "Maxima"]
    };
  },
  methods: {
    ...mapActions("carstore", ["getCarsAction"]),
    onSubmit() {
      let newCarObj = {
        id: uid(),
        year: this.year,
        make: this.make,
        model: this.model,
        color: this.color,
        vin: this.vin,
        nickname: this.nickname,
        license: this.license,
        image: this.image
      };
      console.log("Submit new car", newCarObj);
      fetch("http://localhost:3000/cars", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newCarObj)
      }).then(response => this.getCarsAction());
    }
  }
};
</script>

<style></style>
