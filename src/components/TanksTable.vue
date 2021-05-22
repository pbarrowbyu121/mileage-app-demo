<template>
  <div class="q-mt-md">
    <q-table title="Gas" :data="tanks" :columns="columns" row-key="name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: "date",
          required: true,
          label: "Date",
          align: "left",
          field: "date"
        },
        {
          name: "odometer",
          align: "center",
          label: "Odom",
          field: "odometer",
          sortable: true,
          format: val => parseInt(val).toLocaleString()
        },
        { name: "gallons", label: "Gals", field: "gallons" },
        {
          name: "cost",
          label: "Cost",
          field: "cost",
          format: val => "$" + `${val}`
        }
      ],
      tanks: [
        {
          date: "05/03/2021",
          odometer: 1000,
          gallons: 12,
          cost: 34
        },
        {
          date: "05/04/2021",
          odometer: 1234,
          gallons: 12,
          cost: 34
        }
      ]
    };
  }
};
</script>

<style></style>
