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
                <q-date v-model="date" today-btn minimal>
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
          <q-btn v-close-popup color="primary" type="submit" label="Add Tank" />
          <q-btn v-close-popup flat color="primary" label="Cancel" />
        </q-card-actions>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "NewTankDialog",
  data() {
    return {
      date: null,
      odometer: null,
      gallons: null,
      cost: null
    };
  },
  methods: {
    onSubmit() {
      let newTankObj = {
        date: this.date,
        odometer: this.odometer,
        gallons: this.gallons,
        cost: this.cost
      };
      console.log("submit new tank", newTankObj);
    }
  }
};
</script>

<style></style>
