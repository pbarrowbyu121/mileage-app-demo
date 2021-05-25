<template>
  <div class="q-mt-md">
    <q-table title="Gas" :data="tanks" :columns="columns" row-key="name">
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="editTank(props.row)"
            icon="edit"
          />
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="onDelete(props.row.id)"
            icon="delete"
          />
        </q-td>
      </template>
    </q-table>
    <!-- Edit Tank Dialog -->
    <q-dialog v-model="editTankPopup"><EditTankDialog /></q-dialog>
  </div>
</template>

<script>
import EditTankDialog from "../components/EditTankDialog";
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
        },
        {
          name: "actions",
          label: "Actions",
          field: "",
          align: "center"
        }
      ],
      editTankPopup: false,
      tankToEdit: false
    };
  },
  methods: {
    editTank(tank) {
      console.log("editTank pushed", tank);
      this.tankToEdit = tank;
      this.editTankPopup = true;
    },
    onDelete(id) {
      console.log("delete tank", id);
    }
  },
  components: {
    EditTankDialog
  },
  computed: {
    tanks() {
      return this.$store.state.carstore.tanks;
    }
  }
};
</script>

<style></style>
