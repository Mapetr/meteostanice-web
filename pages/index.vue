<template>
  <div class="grid gap-x-16 grid-cols-2 grid-rows-3 justify-between">
    <div class="h-64 flex justify-end items-center">
      <div class="inline">
        <h1 class="text-2xl font-bold float-right">{{ temperature }} °C</h1>
        <p class="text-sm">Rosný bod: {{ dewPoint }}°C</p>
      </div>
      <img src="/temp.svg" alt="Ikona teploty" class="inline h-36">
    </div>
    <div class="h-64 flex justify-start items-center">
      <img src="/moisture.svg" alt="Ikona vlhkosti" class="inline h-36">
      <div class="inline">
        <h1 class="pl-7 text-2xl font-bold">{{ humidity }} %</h1>
      </div>
    </div>
    <div class="h-64 flex justify-end items-center">
      <div class="inline">
        <h1 class="pr-7 text-2xl font-bold">{{ pressure }} hPa</h1>
      </div>
      <img src="/pressure.svg" alt="Ikona tlaku" class="inline h-36">
    </div>
    <div class="h-64 flex justify-start items-center">
      <img src="/bucket.svg" alt="Ikona deště" class="inline h-36">
      <div class="pl-7 inline">
        <h1 class="text-2xl font-bold">{{ rain }} mm/hr</h1>
        <p class="text-sm">Den: {{ rainTotal }} mm</p>
      </div>
    </div>
    <div class="h-64 flex justify-end items-center">
      <div class="inline">
        <h1 class="pr-7 text-2xl font-bold">{{ windspeed }} km/h</h1>
        <p class="text-sm">Nárazový: {{ windgust }} km/h</p>
      </div>
      <img src="/windspeed.svg" alt="Ikona rychlosti větru" class="inline h-36">
    </div>
    <div class="h-64 flex justify-start items-center">
      <img src="/winddir.svg" alt="Ikona směru větru" class="inline h-36">
      <div class="inline">
        <h1 class="pl-7 text-2xl font-bold">{{ winddir }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { io } from 'socket.io-client';

export default {
  name: "index",
  data() {
    return {
      temperature: 0,
      dewPoint: 0,
      pressure: 0,
      humidity: 0,
      rain: 0,
      rainTotal: 0,
      windspeed: 0,
      windgust: 0,
      winddir: 0
    };
  },
  mounted() {
    const socket = io('https://api.meteo.mapetr.cz');
    socket.on("data", data => {
      this.temperature = data[1];
      this.dewPoint = (data[1]-((100-data[3])/5)).toFixed(1);
      this.humidity = data[3];
      this.pressure = data[2];
      this.windspeed = data[4];
      switch(data[6]) {
        case "N":
          this.winddir = "Sever";
          break;
        case "NE":
          this.winddir = "Severovýchod";
          break;
        case "E":
          this.winddir = "Východ";
          break;
        case "SE":
          this.winddir = "Jihovýchod";
          break;
        case "S":
          this.winddir = "Jih";
          break;
        case "SW":
          this.winddir = "Jihozápad";
          break;
        case "W":
          this.winddir = "Západ";
          break;
        case "NW":
          this.winddir = "Severozápad";
          break;
        default:
          this.winddir = "Neznámý";
          break;
      }
      this.rain = data[4];
      this.windgust = data[7];
      this.rainTotal = 0;
    });
  }
}
</script>

<style scoped>

</style>
