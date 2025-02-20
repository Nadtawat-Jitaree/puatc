<template>
  <v-row>
    <v-col cols="12" md="4"></v-col>
    <v-col cols="12" md="4">
      <v-container class="mx-lg-20 px-lg-16">
        <img
          src="https://www.puatc.ac.th//files/10000001_22012416160333.jpg"
          alt=""
        />
        <div v-for="item in branch" class="mt-3">
          <a :href="item.link" class="text-decoration-none text-black"
            ><h3>- {{ item.name }}</h3></a
          >
        </div>
      </v-container>
    </v-col>
    <v-col cols="12" md="4"></v-col>
  </v-row>
</template>
  
<script setup>
const branch = ref([
  {
    name: "ช่างยนต์",
    link: "https://www.puatc.ac.th//external_links.php?links=100",
  },
  {
    name: "ยานยนต์ไฟฟ้า",
    link: "https://www.puatc.ac.th//external_links.php?links=101",
  },
  {
    name: "ช่างกลโรงงาน",
    link: "https://www.puatc.ac.th//external_links.php?links=101",
  },
  {
    name: "ช่างไฟฟ้ากำลัง",
    link: "https://www.puatc.ac.th//external_links.php?links=103",
  },
  {
    name: "อิเล็กทรอนิกส์",
    link: "https://www.puatc.ac.th//external_links.php?links=104",
  },
  {
    name: "ช่างก่อสร้าง",
    link: "https://www.puatc.ac.th//external_links.php?links=130",
  },
  {
    name: "เมคคาทรอนิกส์",
    link: "https://www.puatc.ac.th//external_links.php?links=136",
  },
  {
    name: "เทคนิคพื้นฐาน",
    link: "https://www.puatc.ac.th//external_links.php?links=138",
  },
  {
    name: "เทคโนโลยีสารสนเทศและการสื่อสาร",
    link: "https://www.puatc.ac.th//external_links.php?links=134",
  },
  {
    name: "การบัญชี",
    link: "https://www.puatc.ac.th//external_links.php?links=167",
  },
  {
    name: "การตลาด",
    link: "https://www.puatc.ac.th//external_links.php?links=166",
  },
  {
    name: "การโรงแรม",
    link: "https://www.puatc.ac.th//external_links.php?links=212",
  },
  {
    name: "การจัดการธุรกิจค้าปลีก",
    link: "https://www.puatc.ac.th//external_links.php?links=214",
  },
  {
    name: "สามัญสัมพันธ์",
    link: "https://www.puatc.ac.th//external_links.php?links=140",
  },
]);
</script>
  
  <style scoped>
.text-center {
  text-align: center;
}
</style>
  