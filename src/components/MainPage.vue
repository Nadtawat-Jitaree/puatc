<template>
  <div class="mb-16">
    <v-container>
      <v-carousel v-model="model" height="100%" cycle interval="4000">
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-img :src="item.src" />
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-row class="mx-5 px-md-6">
      <v-col md="1"> </v-col>
      <v-col cols="12" md="5" class="d-flex">
        <v-card class="px-5 pt-5" width="100%">
          <h3 class="text-center">วิทยาลัยเทคนิคปัว</h3>
          <div>
            ก่อตั้งเมื่อวันที่ 7 พฤษภาคม 2539 ในชื่อ "วิทยาลัยการอาชีพปัว"
            และเปลี่ยนเป็น "วิทยาลัยเทคนิคปัว" เมื่อ 24 สิงหาคม 2563
            เพื่อยกระดับการศึกษา ตั้งอยู่ที่ตำบลปัว อำเภอปัว จังหวัดน่าน
            บนพื้นที่ 50 ไร่ เปิดสอนระดับ ปวช. และ ปวส. แบ่งเป็น 2 ประเภทวิชา
            ช่างอุตสาหกรรม (เครื่องกล, ไฟฟ้ากำลัง, ก่อสร้าง) พาณิชยกรรม (บัญชี,
            การขาย, คอมพิวเตอร์ธุรกิจ) มีหลักสูตร วิชาชีพระยะสั้น และ
            วิชาชีพเสริมมัธยม ครอบคลุมงานช่าง พาณิชยกรรม และเทคโนโลยี รวมถึง
            หลักสูตรทวิศึกษา ทวิภาคี สำหรับผู้จบ ม.ต้น และ ม.ปลาย
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <a href="https://admission.vec.go.th/web/student.htm?mode=init">
          <img
            src="https://www.puatc.ac.th//files/10000001_24103015151836.jpg"
            width="50%"
            alt=""
          />
        </a>
        <a href="https://www.puatc.ac.th//files/10000001_23080711112150.pdf">
          <img
            width="50%"
            src="https://www.puatc.ac.th//files/10000001_23080711112147.jpg"
            alt=""
          />
        </a>
      </v-col>
      <v-col md="1"> </v-col>
    </v-row>
    <v-row class="mx-5 px-md-6">
      <v-col md="1"> </v-col>
      <v-col cols="12" md="5">
        <v-card width="100%" class="px-5 py-5">
          <a href="http://std2018.vec.go.th/">
            <img
              width="50%"
              src="https://www.puatc.ac.th//files/10000001_21100411111831.png"
              alt=""
            />
          </a>
          <a href="http://rms.puatc.ac.th/">
            <img
              width="50%"
              src="https://www.puatc.ac.th//files/10000001_21100411111830.png"
              alt=""
            />
          </a>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card width="100%" class="px-5 py-5">
          <a href="https://bookdosepath.com/login">
            <img
              width="50%"
              src="https://www.puatc.ac.th//files/10000001_24030610104146.png"
              alt=""
            />
          </a>
          <a href="https://dve.vec.go.th/?">
            <img
              width="50%"
              src="https://www.puatc.ac.th//files/10000001_24031110104210.png"
              alt=""
            />
          </a>
        </v-card>
      </v-col>
      <v-col md="1"> </v-col>
    </v-row>
    <v-row class="mx-5 px-md-6">
      <v-col md="1"> </v-col>
      <v-col cols="12" md="5">
        <v-row>
          <v-col cols="12" md="6">
            <v-card width="100%" class="px-5 py-5">
              <img
                width="100%"
                src="https://www.puatc.ac.th//files/10000001_22012416160333.jpg"
                alt=""
              />
              <div v-for="item in branch">
                <div>- {{ item.name }}</div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card width="100%" class="px-5 py-5">
              <img
                width="100%"
                src="http://puatc.ac.th//files/10000001_22012511114209.jpg"
                alt=""
              />
              <div>
                <a
                  href="http://www.technicnan.ac.th/"
                  class="text-black text-decoration-none"
                  >วิทยาลัยเทคนิคน่าน</a
                >
              </div>
              <div>
                <a
                  href="http://www.npc.ac.th/"
                  class="text-black text-decoration-none"
                  >วิทยาลัยสารพัดช่างน่าน</a
                >
              </div>
              <div>
                <a
                  href="http://km.wiangsa.ac.th/?usid=10000001&language=Th"
                  class="text-black text-decoration-none"
                  >วิทยาลัยการอาชีพเวียงสา</a
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="5">
        <v-row>
          <v-col cols="12" md="6">
            <v-card width="100%" class="px-5 py-5">
              <img
                width="100%"
                src="http://puatc.ac.th//files/10000001_22030113132838.jpg"
                alt=""
              />
              <a
                href="https://forms.gle/rGPcbib6p5BwezHN8"
                class="text-black text-decoration-none"
                >แบบสอบถามการใช้งานอินเตอร์เน็ตภายในวิทยาลัย
                และเว็บไซต์วิทยาลัยเทคนิคปัว</a
              >
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card width="100%" class="px-5 py-5">
              <img
                width="100%"
                src="https://www.puatc.ac.th//files/10000001_22022311111126.jpg"
                alt=""
              />
              <a
                href="mailto:info@puatc.ac.th"
                class="text-black text-decoration-none"
                >info@puatc.ac.th</a
              >
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="1"> </v-col>
    </v-row>

    <div class="text-center"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      branch: [
        { name: "ช่างยนต์" },
        { name: "ยานยนต์ไฟฟ้า" },
        { name: "ช่างกลโรงงาน" },
        { name: "ช่างไฟฟ้ากำลัง" },
        { name: "อิเล็กทรอนิกส์" },
        { name: "ช่างก่อสร้าง" },
        { name: "เมคคาทรอนิกส์" },
        { name: "เทคนิคพื้นฐาน" },
        { name: "เทคโนโลยีสารสนเทศและการสื่อสาร" },
        { name: "การบัญชี" },
        { name: "การตลาด" },
        { name: "การโรงแรม" },
        { name: "การจัดการธุรกิจค้าปลีก" },
        { name: "สามัญสัมพันธ์" },
      ],
      items: [
        { src: "http://www.puatc.ac.th//files/10000001_25011314142958.png" },
        { src: "http://www.puatc.ac.th//files/10000001_24102113132552.png" },
        { src: "http://www.puatc.ac.th//files/10000001_24112115152111.png" },
        { src: "http://www.puatc.ac.th//files/10000001_24081610104413.png" },
        { src: "http://www.puatc.ac.th//files/10000001_2406110993934.png" },
      ],
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  components: {},
};
</script>

<style>
.custom-carousel {
  height: 60vh; /* กำหนดความสูงตาม viewport */
}

@media (max-width: 600px) {
  .custom-carousel {
    height: 40vh; /* ปรับขนาดให้เหมาะกับมือถือ */
  }
}
</style>