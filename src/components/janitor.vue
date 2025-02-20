<template>
  <v-container class="mb-5">
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
  <script>
import img1 from "@/assets/janitor/1.jpg";
import img2 from "@/assets/janitor/2.jpg";
import img3 from "@/assets/janitor/3.jpg";
import img4 from "@/assets/janitor/4.jpg";
import img5 from "@/assets/janitor/5.jpg";
import avatar from "@/assets/janitor/avatar.png";


</script>
  <script setup>
const admins = [
  {
    name: "นางจันทร์ ศิริรัตน์",
    position: "นักการภารโรง",
    image: img1,
  },
  {
    name: "นางภาถาพันธ์ ขระสุ",
    position: "นักการภารโรง",
    image: img2,
  },
  {
    name: "นายศรายุทธ ยะแสง",
    position: "นักการภารโรง",
    image: avatar,
  },
  {
    name: "นายธีรวัฒน์  วารีทิพย์",
    position: "นักการภารโรง",
    image: img3,
  },
  {
    name: "นายถาวร  วังสาร",
    position: "นักการภารโรง",
    image: img4,
  },
  {
    name: "นายบุญส่ง  วชิราธนกิจ",
    position: "นักการภารโรง",
    image: avatar,
  },
  {
    name: "นายประเทือง  อักขระ",
    position: "นักการภารโรง(บ่อหยวก)",
    image: avatar,
  },
  {
    name: "นางระเบียบ  วารีทิพย์",
    position: "นักการภารโรง",
    image: img5,
  },
  {
    name: "นางทิวาภรณ์  ไชยศิลป์",
    position: "นักการภารโรง",
    image: avatar,
  },
  {
    name: "นายวิชุวัฒน์  มาณะกิจ",
    position: "ยามรักษาการณ์",
    image: avatar,
  },
  {
    name: "นายอาทิตย์  ศุปภัทรสรณ์",
    position: "ยามรักษาการณ์",
    image: avatar,
  },
];
</script>
  
  <style scoped>
.text-center {
  text-align: center;
}
</style>
  