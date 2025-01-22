<template>
  <q-page class="q-pa-md">
    <!-- Indicador de Carregamento Centralizado -->
    <div v-if="loading" class="loading-container">
      <q-circular-progress indeterminate rounded size="50px" color="lime" class="q-ma-md" />
    </div>

    <!-- Grid de Projetos (somente após o carregamento) -->
    <div v-else class="row items-start q-gutter-md justify-center">
      <div
        v-for="(project, index) in filteredProjects"
        :key="index"
        class="col-12 col-sm-6 col-md-3"
      >
        <!-- Card de Projeto -->
        <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">{{ project.name }}</div>
            <div class="text-subtitle2">
              Linguagem: {{ project.language || 'Sem linguagem definida' }}<br />
              Tópicos: {{ project.topics.join(', ') }}
            </div>
          </q-card-section>

          <q-card-section>
            {{ project.description || 'Descrição não disponível.' }}
          </q-card-section>

          <q-separator dark />

          <q-card-actions>
            <q-btn flat color="primary" :href="project.html_url" target="_blank">
              Ver no GitHub
            </q-btn>
            <q-btn
              flat
              color="primary"
              v-if="project.homepage"
              :href="project.homepage"
              target="_blank"
            >
              Produção
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

---

### Script Atualizado:

```vue
<script>
import { ref, onMounted, computed } from 'vue'

export default {
  name: 'MeusProjetos',
  setup() {
    const projects = ref([])
    const loading = ref(true)

    // Função para buscar projetos do GitHub
    const fetchGitHubProjects = async () => {
      const startTime = Date.now()

      try {
        const response = await fetch('https://api.github.com/users/EmanuelAngelo/repos')
        const data = await response.json()
        projects.value = data
      } catch (error) {
        console.error('Erro ao buscar projetos do GitHub:', error)
      } finally {
        const elapsedTime = Date.now() - startTime
        const remainingTime = 3000 - elapsedTime // Garante 3 segundos de carregamento

        if (remainingTime > 0) {
          setTimeout(() => {
            loading.value = false
          }, remainingTime)
        } else {
          loading.value = false
        }
      }
    }

    const sortedProjects = computed(() => {
      return [...projects.value].sort((a, b) => {
        const dateA = new Date(a.created_at)
        const dateB = new Date(b.created_at)
        return dateB.getTime() - dateA.getTime()
      })
    })

    const filteredProjects = computed(() =>
      sortedProjects.value.filter(
        (project) => project.topics && project.topics.length > 0 && project.language
      )
    )

    onMounted(() => {
      fetchGitHubProjects()
    })

    return {
      projects,
      filteredProjects,
      loading,
    }
  },
}
</script>
<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.my-card {
  height: 290px;
  max-width: 344px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 600px) {
  .my-card {
    height: 400px;
  }
}
</style>
