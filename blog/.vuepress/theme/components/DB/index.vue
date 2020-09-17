<template>
  <table>
    <thead>
      <tr>
        <th>1</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import TABLE_HEADERS from "./tableHeaders";

export default {
  name: "DB",
  props: {
    csv: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: null,
    },
  },
  data: function() {
    return {
      bases: {
        original: [],
        filtered: [],
      },
      filters: {
        active: [],
        options: [],
      },
      tableHeaders: [...TABLE_HEADERS],
    };
  },
  // created() {
  //   if (!this.id) throw Error("Table needs an id attribute.");

  //   if (!this.csvData || this.csvData.length === 0) {
  //     this.tableData = { content: null, tableHeaders: null };
  //     throw Error("No data for Table");
  //   }
  //   this.tableData = csvToTable(this.csvData);

  //   if (!this.tableData.content) {
  //     this.bases.original = [];
  //     throw Error("No bases for Table");
  //   }

  //   this.bases.original = parseBases(this.tableData);
  //   this.bases.filtered = this.bases.original;
  //   this.filters.options = this.getUniques(this.tableHeaders, "filterKey");
  //   console.log(this.bases.filtered);
  // },
  methods: {
    handleFilter(filterCheckbox) {
      const emittedFilter = {
        param: filterCheckbox.getGroup(),
        value: filterCheckbox.getValue(),
      };

      // if checked is false, remove the emitted filter from the fiters array
      if (!filterCheckbox.check) {
        this.filters.active = this.filters.active.filter(
          (item) => JSON.stringify(item) !== JSON.stringify(emittedFilter)
        );
        return;
      }
      this.filters.active.push(emittedFilter);
    },
    handleSort(key) {
      const columnToBeSorted = this.headers.find(
        (header) => header.sortKey === key
      );
      const direction = columnToBeSorted.order ? "desc" : "asc";
      const orderedData = orderBy(this.bases.original, [key], [direction]);
      this.bases.filtered = orderedData;
      columnToBeSorted.order = !columnToBeSorted.order;
    },
    getUniques: function(items, param) {
      if (!items) return;

      let uniques = {};
      items.forEach((item) => {
        if (!item[param]) return;
        uniques[item[param]] = uniqueElements(item[param], this.bases.original);
      });
      return Object.assign({}, uniques);
    },
    handleClickFilterPill(event) {
      // console.log(event);
    },
  },
};
</script>

<style></style>
