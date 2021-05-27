<template>
  <q-card class="my-card text-krona-one">
    <q-card-section>
      <div>Add New Tank</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <!-- Date -->
        <q-input dense filled v-model="date" label="Date" class="q-pb-none">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date" today-btn minimal mask="MM/DD/YYYY">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Ok" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <!-- Odometer -->
        <q-input
          filled
          v-model="odometer"
          label="Odometer"
          dense
          :rules="[val => /^[1-9]\d*$/.test(val) || 'Positive integers only']"
        />
        <!-- Gallons -->
        <q-input filled v-model="gallons" label="Gallons" dense />
        <!-- Cost -->
        <q-input filled v-model="cost" label="Cost ($)" dense />

        <q-card-actions align="right">
          <q-btn
            v-close-popup
            color="primary"
            type="submit"
            label="Save Tank"
          />
          <q-btn v-close-popup flat color="primary" label="Cancel" />
        </q-card-actions>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EditTankDialog",
  props: ["tank"],
  data() {
    return {
      date: this.tank.date,
      odometer: this.tank.odometer,
      gallons: this.tank.gallons,
      cost: this.tank.cost
    };
  },
  methods: {
    ...mapActions("carstore", ["getTanksAction", "editTankAction"]),
    onSubmit() {
      let editedTankObj = {
        ...this.tank,
        date: this.date,
        odometer: this.odometer,
        gallons: this.gallons,
        cost: this.cost
      };
      this.editTankAction(editedTankObj).then(response =>
        this.getTanksAction()
      );
    }
  }
};
</script>

<style></style>
