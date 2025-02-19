<template>
    <v-container class="mb-5">
      <v-card class="pa-4">
        <v-card-title class="text-h6 font-weight-bold text-center">แผนผังหน่วยงาน</v-card-title>
        <div class="text-center">
          <h3 style="color: #cc0000;"><b>ข้าราชการ</b></h3>
        </div>
        <v-row justify="center">
          <v-col v-for="(admin, index) in admins.slice(0)" :key="index" cols="12" md="4" class="text-center">
            <v-img :src="admin.image" contain height="250"></v-img>
            <h3 class="mt-2 font-weight-bold">{{ admin.name }}</h3>
            <p><strong>ตำแหน่ง:</strong> {{ admin.position }}</p>
            <p><strong>หน้าที่หลัก:</strong> {{ admin.role }}</p>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  const admins = [
    {
      name: "นางสาวจันทิรา สุทธหลวง",
      position: "ครูชำนาญการ",
      role: "หัวหน้าการเงิน",
      image: "http://puatc.ac.th//files/10000001_21120910104200.jpg",
    },
    {
      name: "นายชัยวุฒิ ธงเงิน",
      position: "ครูชำนาญการ",
      role: "หัวหน้างานทะเบียน",
      image: "http://puatc.ac.th//files/10000001_21120815154925.jpg",
    },
    {
      name: "นายภควัตร วงศ์ยังประเสิรฐ",
      position: "ครูชำนาญการ",
      role: "หัวหน้างานพัสดุ",
      image: "http://puatc.ac.th//files/10000001_21120216163904.jpg",
    },
    {
      name: "นายสมศักดิ์ ตันดี",
      position: "ครูชำนาญการพิเศษ",
      role: "หัวหน้าแผนกแม็คคาทรอนิกส์",
      image: "http://puatc.ac.th//files/10000001_21120216163116.jpg",
    },
    {
      name: "นายภัทรวิชญ์ กำหนดศรี",
      position: "ครูผู้ช่วย",
      role: "ผู้ช่วยหัวหน้างานความร่วมมือ	",
      image: "http://puatc.ac.th//files/10000001_2307050995231.png",
    },
    {
      name: "นายคธาวุฒิ รักษ์รงค์",
      position: "ครู",
      role: "หัวหน้างานปกครอง",
      image: "http://puatc.ac.th//files/10000001_2112080994447.jpg",
    },
    {
      name: "นางสาวชนกเนตร  มะโนชัย",
      position: "ครู",
      role: "หัวหน้างานพัฒนาหลักสูตรการเรียนการสอน",
      image: "http://puatc.ac.th//files/10000001_21121314143514.png",
    },
    {
      name: "นายณรงค์ชัย บุญเทพ",
      position: "ครู",
      role: "หัวหน้างานวัดผลและประเมินผล",
      image: "http://puatc.ac.th//files/10000001_21121314143514.png",
    },
    {
      name: "นายไกรสิทธิ์ อิ่นคำ",
      position: "ครู",
      role: "หัวหน้างานวางแผนและงบประมาณ",
      image: "http://puatc.ac.th//files/10000001_21120810102418.jpg",
    },
    {
      name: "นางสาวสุดาทิพย์  ไชยยะ",
      position: "ครู",
      role: "หัวหน้างานวางแผนและงบประมาณ",
      image: "http://puatc.ac.th//files/10000001_21121314143514.png",
    },
    {
      name: "นายไกรภพ อานัน",
      position: "ครู",
      role: "ผู้ช่วยหัวหน้างานวางแผนและงบประมาณ",
      image: "http://puatc.ac.th//files/10000001_21121314143514.png",
    },
    {
      name: "นายกิติกุล ทะนันไชย",
      position: "ครู",
      role: "หัวหน้างานบุคลากร",
      image: "http://puatc.ac.th//files/10000001_21121314143514.png",
    },
  ];
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>
  