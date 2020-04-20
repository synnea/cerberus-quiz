  <template>

    <div class="container">

      <div class="jumbotron">
      <h1>Cerberus Team Quiz Results</h1>
      <div>

        <ul>

          <div v-for="node in content" v-bind:key="node" class="result">

            <div v-for="key in node" v-bind:key="key.value">

              {{ key }}
            </div>
          </div>
        </ul>
      </div>
      </div>

    </div>

  </template>

<script>
import axios from 'axios';
export default {
  name: 'Quiz',
  data() {
    return { 
        content: null,
     }
  },
   created () {
  this.fetchPosts();
  },
  methods: {
      fetchPosts() {
              // makes the API call and saves the response.
    axios
        .get('https://sheet.best/api/sheets/8a4c70cc-2d42-4c74-9deb-38bd48f3588f')
        .then((response) => {
        this.content = response.data;
        this.renderRanking() })
        .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => this.loading = false);
          },
      renderRanking() {
        let lastPost = this.content.length-1;
        let targetObj = this.content[lastPost];
        delete targetObj.Datum;
        var sortedRanking = this.sortRanking(targetObj);
        this.content = sortedRanking;
      },
      sortRanking(obj) {
        {
          var sortable = [];
          for (var key in obj)
              sortable.push([key, obj[key]]);
          sortable.sort(function (a, b) {
            return a[1] - b[1]; 
          });
          sortable = sortable.reverse();
          // sortable = sortable.map(x => x);
          // sortable = sortable.values();
          console.log(sortable);
          return sortable; 
        }
      }
      }
};
</script>

<style css>

ul {
    list-style-type: none;
}
h1 {
  size: 3rem;
}
.result {
  padding-bottom: 3rem;
}
.jumbotron {
  margin-top: 10rem;
  opacity: 0.5;
  background-color: white;
  width: 50%;
  justify-content: center;
  display: inline-block;
  border-radius: 25px;
}

.container {
  display: flex !important;
  justify-content: center;
}

body {
  background-color: black;
}

</style>