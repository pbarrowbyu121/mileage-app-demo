<template>
  <div class="text-krona-one">
    <q-card v-for="car in cars" :key="car.id" class="my-card q-ma-md">
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
          <div class="col">{{ car.mpg }} mpg</div>
        </div>
        <div class="row">
          <div class="col">Total Miles:</div>
          <div class="col">{{ car.odometer }}</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      cars: [
        {
          id: 1,
          year: 2010,
          make: "Honda",
          model: "Civic",
          mpg: 29,
          odometer: 1000,
          nickname: "Max",
          image:
            "https://lh3.googleusercontent.com/proxy/ZgdSqghmvZs3C3wty1fGh0eW7R4DvDI7hHBOghTmGtHn0cfSb0keZgllXzX-1RP1OEKISNzVM6810_mVaOmGwQrhm105WgfN"
        },
        {
          id: 2,
          year: 2020,
          make: "Tesla",
          model: "Roadster",
          mpg: 33,
          odometer: 50,
          nickname: "Doge",
          image:
            "https://cdn.carbuzz.com/gallery-images/2022-tesla-roadster-carbuzz-523781.jpg"
        }
      ]
    };
  }
};
</script>
