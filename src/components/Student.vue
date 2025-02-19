<template>
  <v-container class="mx-20 px-16 mb-10">
    <v-table>
      <thead>
        <tr bgcolor="gray" class="text-white">
          <th>ลำดับ</th>
          <th>สาขางาน</th>
          <th colspan="2">ปวช.1</th>
          <th colspan="2">ปวช.2</th>
          <th colspan="2">ปวช.3</th>
          <th colspan="2">ปวส.1</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>ชาย</th>
          <th>หญิง</th>
          <th>ชาย</th>
          <th>หญิง</th>
          <th>ชาย</th>
          <th>หญิง</th>
          <th>ชาย</th>
          <th>หญิง</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.no }}</td>
          <td>{{ item.department }}</td>
          <td>{{ item.pvc1_male || "-" }}</td>
          <td>{{ item.pvc1_female || "-" }}</td>
          <td>{{ item.pvc2_male || "-" }}</td>
          <td>{{ item.pvc2_female || "-" }}</td>
          <td>{{ item.pvc3_male || "-" }}</td>
          <td>{{ item.pvc3_female || "-" }}</td>
          <td>{{ item.pvs1_male || "-" }}</td>
          <td>{{ item.pvs1_female || "-" }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
  
  <script setup>
const items = ref([
  {
    no: 1,
    department: "ยานยนต์",
    pvc1_male: "",
    pvc1_female: "",
    pvc2_male: 58,
    pvc2_female: "",
    pvc3_male: 78,
    pvc3_female: 2,
    pvs1_male: "",
    pvs1_female: "",
  },
  {
    no: 2,
    department: "ช่างยนต์",
    pvc1_male: 56,
    pvc1_female: 1,
    pvc2_male: "",
    pvc2_female: "",
    pvc3_male: "",
    pvc3_female: "",
    pvs1_male: "",
    pvs1_female: "",
  },
  {
    no: 3,
    department: "เครื่องมือกล",
    pvc1_male: "",
    pvc1_female: "",
    pvc2_male: 15,
    pvc2_female: "",
    pvc3_male: "",
    pvc3_female: 4,
    pvs1_male: "",
    pvs1_female: "",
  },
  {
    no: 4,
    department: "ช่างกลโรงงาน",
    pvc1_male: 14,
    pvc1_female: 2,
    pvc2_male: "",
    pvc2_female: "",
    pvc3_male: "",
    pvc3_female: "",
    pvs1_male: "",
    pvs1_female: "",
  },
  {
    no: 5,
    department: "ช่างไฟฟ้า",
    pvc1_male: 31,
    pvc1_female: "",
    pvc2_male: "",
    pvc2_female: "",
    pvc3_male: "",
    pvc3_female: "",
    pvs1_male: "",
    pvs1_female: "",
  },
  {
    no: 6,
    department: "ไฟฟ้ากำลัง",
    pvc1_male: "",
    pvc1_female: "",
    pvc2_male: 36,
    pvc2_female: 2,
    pvc3_male: 27,
    pvc3_female: 2,
    pvs1_male: "",
    pvs1_female: "",
  },
  {
    no: 7,
    department: "อิเล็กทรอนิกส์",
    pvc1_male: 10,
    pvc1_female: 4,
    pvc2_male: 7,
    pvc2_female: 4,
    pvc3_male: 5,
    pvc3_female: 2,
    pvs1_male: "",
    pvs1_female: "",
  },
  {
    no: 8,
    department: "ก่อสร้าง",
    pvc1_male: 60,
    pvc1_female: 17,
    pvc2_male: 55,
    pvc2_female: 1,
    pvc3_male: 29,
    pvc3_female: 6,
    pvs1_male: "",
    pvs1_female: "",
  },
  {
    no: 9,
    department: "เมคคาทรอนิกส์",
    pvc1_male: "",
    pvc1_female: "",
    pvc2_male: 3,
    pvc2_female: 3,
    pvc3_male: 9,
    pvc3_female: 3,
    pvs1_male: "",
    pvs1_female: "",
  },
  {
    no: 10,
    department: "การบัญชี",
    pvc1_male: 2,
    pvc1_female: 14,
    pvc2_male: 2,
    pvc2_female: 22,
    pvc3_male: 3,
    pvc3_female: 20,
    pvs1_male: "",
    pvs1_female: "",
  },
  {
    no: 11,
    department: "การตลาด",
    pvc1_male: "",
    pvc1_female: "11",
    pvc2_male: 2,
    pvc2_female: 15,
    pvc3_male: 1,
    pvc3_female: 14,
    pvs1_male: 1,
    pvs1_female: 9,
  },
  {
    no: 12,
    department: "การโรงแรม",
    pvc1_male: "",
    pvc1_female: 6,
    pvc2_male: "",
    pvc2_female: 4,
    pvc3_male: "",
    pvc3_female: "",
    pvs1_male: "",
    pvs1_female: 5,
  },
  {
    no: 13,
    department: "เทคโนโลยีสารสนเทศ",
    pvc1_male: "",
    pvc1_female: "",
    pvc2_male: 25,
    pvc2_female: 6,
    pvc3_male: 28,
    pvc3_female: 6,
    pvs1_male: 6,
    pvs1_female: 3,
  },
  {
    no: 14,
    department: "เทคนิคเครื่องกล",
    pvc1_male: "",
    pvc1_female: "",
    pvc2_male: "",
    pvc2_female: "",
    pvc3_male: "",
    pvc3_female: "",
    pvs1_male: 24,
    pvs1_female: "",
  },
  {
    no: 15,
    department: "เทคนิคการผลิต",
    pvc1_male: "",
    pvc1_female: "",
    pvc2_male: "",
    pvc2_female: "",
    pvc3_male: "",
    pvc3_female: "",
    pvs1_male: 4,
    pvs1_female: 2,
  },
  {
    no: 16,
    department: "ไฟฟ้า",
    pvc1_male: "",
    pvc1_female: "",
    pvc2_male: "",
    pvc2_female: "",
    pvc3_male: "",
    pvc3_female: "",
    pvs1_male: 28,
    pvs1_female: 1,
  },
  {
    no: 17,
    department: "ช่างก่อสร้าง",
    pvc1_male: "",
    pvc1_female: "",
    pvc2_male: "",
    pvc2_female: "",
    pvc3_male: "",
    pvc3_female: "",
    pvs1_male: 14,
    pvs1_female: 2,
  },
  {
    no: 18,
    department: "เมคคาทรอนิกส์และหุ่นยนต์",
    pvc1_male: "",
    pvc1_female: "",
    pvc2_male: "",
    pvc2_female: "",
    pvc3_male: "",
    pvc3_female: "",
    pvs1_male: 7,
    pvs1_female: 4,
  },
  {
    no: 19,
    department: "เทคนิคยานยนต์ไฟฟ้า",
    pvc1_male: "",
    pvc1_female: "",
    pvc2_male: "",
    pvc2_female: "",
    pvc3_male: "",
    pvc3_female: "",
    pvs1_male: 5,
    pvs1_female: "",
  },
  {
    no: 20,
    department: "การบัญชี",
    pvc1_male: "",
    pvc1_female: "",
    pvc2_male: "",
    pvc2_female: "",
    pvc3_male: "",
    pvc3_female: "",
    pvs1_male: 1,
    pvs1_female: 26,
  },
  {
    no: 21,
    department: "การจัดการธุรกิจค้าปลีก",
    pvc1_male: "",
    pvc1_female: "",
    pvc2_male: "",
    pvc2_female: "",
    pvc3_male: "",
    pvc3_female: "",
    pvs1_male: 3,
    pvs1_female: 8,
  },
]);
</script>
  
  <style scoped>
.text-center {
  text-align: center;
}
</style>
  