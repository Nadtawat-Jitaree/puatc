<template>
  <v-container>
    <v-card class="pa-4">
      <v-card-title class="text-h6 font-weight-bold text-center"
        >แผนผังหน่วยงาน</v-card-title
      >
      <div class="text-center">
        <h3 style="color: #cc0000"><b>นักการภารโรง</b></h3>
      </div>
      <v-row justify="center">
        <v-col
          v-for="(admin, index) in admins.slice(0)"
          :key="index"
          cols="12"
          md="4"
          class="text-center"
        >
          <v-img :src="admin.image" contain height="250"></v-img>
          <h3 class="mt-2 font-weight-bold">{{ admin.name }}</h3>
          <p><strong>ตำแหน่ง:</strong> {{ admin.position }}</p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
  
  <script setup>
const admins = [
  {
    name: "นางจันทร์ ศิริรัตน์",
    position: "นักการภารโรง",
    image: "https://www.puatc.ac.th//files/10000001_23071114143404.jpg",
  },
  {
    name: "นางภาถาพันธ์ ขระสุ",
    position: "นักการภารโรง",
    image: "http://puatc.ac.th//files/10000001_21121313131604.jpg",
  },
  {
    name: "นายศรายุทธ ยะแสง",
    position: "นักการภารโรง",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายธีรวัฒน์  วารีทิพย์",
    position: "นักการภารโรง",
    image: "https://www.puatc.ac.th//files/10000001_23071114143358.jpg",
  },
  {
    name: "นายถาวร  วังสาร",
    position: "นักการภารโรง",
    image: "https://www.puatc.ac.th//files/10000001_23071114143440.jpg",
  },
  {
    name: "นายบุญส่ง  วชิราธนกิจ",
    position: "นักการภารโรง",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายประเทือง  อักขระ",
    position: "นักการภารโรง(บ่อหยวก)",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นางระเบียบ  วารีทิพย์",
    position: "นักการภารโรง",
    image: "https://www.puatc.ac.th//files/10000001_23071114143931.jpg",
  },
  {
    name: "นางทิวาภรณ์  ไชยศิลป์",
    position: "นักการภารโรง",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายวิชุวัฒน์  มาณะกิจ",
    position: "ยามรักษาการณ์",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
  {
    name: "นายอาทิตย์  ศุปภัทรสรณ์",
    position: "ยามรักษาการณ์",
    image: "http://puatc.ac.th//files/10000001_21121314143514.png",
  },
];
</script>
  
  <style scoped>
.text-center {
  text-align: center;
}
</style>
  