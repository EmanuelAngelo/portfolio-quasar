<template>
  <q-page padding>
    <q-card flat bordered class="q-pa-md" style="border: none">
      <q-card-section>
        <div class="row justify-center">
          <!-- Coluna para texto -->
          <div class="col-12 col-md-8">
            <p class="text-justify">
              Graduado em Sistemas de Informação em 2020.1, desenvolvo constantemente novas
              habilidades e busco atualização em tecnologias para me destacar no mercado. Tenho
              sólida experiência em desenvolvimento de sistemas e frameworks modernos, além de
              conhecimentos avançados em Data Science, incluindo análise e visualização de dados,
              modelagem e ferramentas de BI. Atualmente, estou aprofundando meus estudos em Java e
              Kotlin através da plataforma Alura, conhecida por seus cursos de excelência, que têm
              potencializado minhas competências em programação e análise de dados.
              <br /><br />
              <code>
                Linguagens de Programação: ['Java', 'Kotlin', 'JavaScript', 'Python', 'Go Lang',
                'TypeScript'] <br />
                ERP e Sistemas: ['TOTVS RM','Service Now', 'Gesplan', 'Hyperion', 'Elaw',
                'AccessOne']<br />
                Frameworks: ['Django', 'Vue.js', 'Spring'] <br />Bancos de Dados: ['SQL Server',
                'PgSQL'] <br />Metodologias Ágeis: ['Kanban', 'Scrum'] <br />Data Science:
                ['Python', 'SQL', 'B.I', 'ETL', 'KNIME']
              </code>
              <br /><br />
            </p>
          </div>

          <!-- Coluna para imagem -->
          <!-- <div class="col-12 col-md-4">
            <q-img
              src="https://images.pexels.com/photos/15175074/pexels-photo-15175074.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Emanuel Angelo"
              class="profile-image"
              ratio="1"
            />
          </div> -->
        </div>
      </q-card-section>

      <q-separator spaced />

      <q-card-section>
        <div class="row justify-center">
          <div class="col-12">
            <h2 class="text-center">Experiências</h2>
          </div>
          <MeusEmpregos />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import MeusEmpregos from './MeusEmpregos.vue'

export default {
  name: 'SobreMim',
  components: { MeusEmpregos },
}
</script>

<style scoped>
.profile-image {
  width: 50%;
  border-radius: 8px;
}

p {
  text-align: justify;
}
</style>
