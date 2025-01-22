<template>
  <div class="q-pa-md row items-start q-gutter-md justify-center">
    <div
      v-for="(experience, index) in experiences"
      :key="index"
      class="col-12 col-md-6 col-lg-3 d-flex"
    >
      <!-- Card de Experiência -->
      <q-card class="my-card full-height" flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <div>{{ experience.jobTitle }}</div>
            <div class="text-h5 q-mt-sm q-mb-xs">{{ experience.company }}</div>
            <div class="text-caption text-grey">
              {{ experience.location }}<br />
              {{ experience.address }}
            </div>
          </q-card-section>

          <!-- Imagem -->
          <q-card-section class="col-5 flex flex-center">
            <q-img class="rounded-borders" :src="experience.img" />
          </q-card-section>
        </q-card-section>

        <q-separator />

        <!-- Ações -->
        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat>{{ experience.date }}</q-btn>
          <q-btn flat color="primary" @click="showStacks(index)"> Stacks </q-btn>
        </q-card-actions>
      </q-card>
    </div>

    <!-- Diálogo para exibir Stacks -->
    <q-dialog v-model="dialogVisible">
      <q-card>
        <q-card-section>
          <div class="text-h6">Stacks</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <ul>
            <li v-for="(stack, i) in selectedStacks" :key="i">{{ stack }}</li>
          </ul>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Fechar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const experiences = ref([
      {
        jobTitle: 'Analista de Implantação',
        company: 'PVT Software e Serviços',
        location: 'Home Office',
        date: 'Out de 2023 - atual',
        address: 'Vila Velha, Espírito Santo, Brasil · Remota',
        img: 'https://media.licdn.com/dms/image/v2/C4D0BAQH9Jv3uZQ70Pw/company-logo_200_200/company-logo_200_200/0/1655151859097/pvtsoftware_logo?e=1745452800&v=beta&t=4fQ24aApwH236xlV4rjUQNybvr_8EWg03wHWVdf1BEM',
        stacks: ['Totvs Rm', 'SQL Server / PGSQL', 'Javascript, Python', 'ABAX / Gesplan / Admin'],
      },
      {
        jobTitle: 'Desenvolvedor full stack',
        company: 'UNDB',
        location: 'Presencial',
        date: 'Nov de 2022 - set de 2023',
        address: 'São Luís, Maranhão, Brasil · Presencial',
        img: 'https://scontent-for2-2.xx.fbcdn.net/v/t39.30808-6/343404012_609156724600342_4000267378462598576_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=t4jdrHO_DqUQ7kNvgGPPspF&_nc_zt=23&_nc_ht=scontent-for2-2.xx&_nc_gid=AipB2moMMgJd6ejUPNCOsdW&oh=00_AYA0ShFLBm0MRzne3l7ggZit1SwsbqdUnFTwnZq6UbYsBQ&oe=679709AD',
        stacks: ['Totvs Rm', 'SQL', 'JavaScript / Python', 'Vuejs / Django'],
        showDescription: false,
      },
      {
        jobTitle: 'Desenvolvedor full stack',
        company: 'Controller Education',
        location: 'Home Office',
        date: 'Out de 2021 - Ago de 2022',
        address: 'Joinville, Santa Catarina, Brasil · Remota',
        img: 'https://www.controller.education/assets/img/logocontroller.png',
        stacks: ['PgSQL', 'TypeScript / Go Lang', 'Reactjs'],
        showDescription: false,
      },
      {
        jobTitle: 'Desenvolvedor full stack',
        company: 'UNDB',
        location: 'Presencial',
        date: 'Dez de 2020 - Ago de 2021',
        address: 'São Luís, Maranhão, Brasil · Híbrida',
        img: 'https://scontent-for2-2.xx.fbcdn.net/v/t39.30808-6/343404012_609156724600342_4000267378462598576_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=t4jdrHO_DqUQ7kNvgGPPspF&_nc_zt=23&_nc_ht=scontent-for2-2.xx&_nc_gid=AipB2moMMgJd6ejUPNCOsdW&oh=00_AYA0ShFLBm0MRzne3l7ggZit1SwsbqdUnFTwnZq6UbYsBQ&oe=679709AD',
        stacks: ['SQL', 'JavaScript / Python', 'Django', 'Vuejs'],
        showDescription: false,
      },
      {
        jobTitle: 'Tecnico de Informatica',
        company: 'HOSPITAL PRESIDENTE DUTRA',
        location: 'Presencial',
        date: 'Jan de 2017 - Out de 2019',
        address: 'São Luís, Maranhão, Brasil · Presencial',
        img: 'https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-nordeste/hu-ufma/comunicacao/noticias/hu-ufmaebserh-recebe-162-novos-residentes/logo',
        stacks: ['HelpDesk', 'Suporte ao usuario', 'Linux', 'Ad'],
        showDescription: false,
      },
      {
        jobTitle: 'Soldado de infantaria',
        company: 'Exército Brasileiro',
        location: 'Presencial',
        date: 'Mar de 2011 - Mar de 2014 ',
        address: 'São Luís, Maranhão, Brasil · Híbrida',
        img: 'https://www.legiaodainfantariadoceara.org/24bis_foto900px.jpg',
        stacks: ['Atirador de MAG72', 'Caçador', 'SGT'],
        showDescription: false,
      },
    ])

    const dialogVisible = ref(false)
    const selectedStacks = ref([])

    // Abre o diálogo com os stacks do card clicado
    const showStacks = (index) => {
      selectedStacks.value = experiences.value[index].stacks
      dialogVisible.value = true
    }

    return {
      experiences,
      dialogVisible,
      selectedStacks,
      showStacks,
    }
  },
}
</script>

<style scoped>
/* Garante que todos os cards tenham a mesma altura */
.full-height {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

/* Adiciona estilo adicional para os cards */
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>
