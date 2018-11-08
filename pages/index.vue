<template>
  <div class="is-clearfix">
    <Header />
    <Intro/>
    <Feature />
    <ScreenShot />
    <Download/>
    <FAQ />
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/home/Header";
import Intro from "@/components/home/Intro";
import Feature from "@/components/home/Features";
import ScreenShot from "@/components/home/ScreenShot";
import Download from "@/components/home/Download";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";

export default {
  components: {
    Header,
    Intro,
    Feature,
    ScreenShot,
    Download,
    FAQ,
    Footer
  }
};
</script>
