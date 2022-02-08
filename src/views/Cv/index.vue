<template>
   <div class="grid grid-rows-[1fr] w-full min-h-screen pb-10 pt-24">
     
      <div class=" gradient__bg backgournd_shadow rounded-xl px-4 sm:px-12 py-6 grid grid-rows-[auto,1fr,auto]">
         <div class="flex flex-row text-white items-center px-4">
            <h3 class="text-3xl ml-2 font-extrabold">نمونه کار</h3>
            <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 82.999 71.652">
                  <g id="Group_4" data-name="Group 4" transform="translate(-1003.5 -431.5)">
                    <g id="world_wide_web-1.1s-200px" data-name="world wide web-1.1s-200px" transform="translate(995 417.326)">
                      <g id="Group_2" data-name="Group 2">
                        <path id="Path_2" data-name="Path 2" d="M85.991,68.591H14.009A5.517,5.517,0,0,1,8.5,63.082v-43.4a5.517,5.517,0,0,1,5.509-5.509H85.99A5.517,5.517,0,0,1,91.5,19.683v43.4a5.508,5.508,0,0,1-5.508,5.509ZM14.009,17.174A2.513,2.513,0,0,0,11.5,19.683v43.4a2.513,2.513,0,0,0,2.509,2.509H85.991A2.508,2.508,0,0,0,88.5,63.082v-43.4a2.513,2.513,0,0,0-2.509-2.509Z" fill="#fff"/>
                        <path id="Path_3" data-name="Path 3" d="M50,85.826a1.5,1.5,0,0,1-1.5-1.5V67.091a1.5,1.5,0,0,1,3,0V84.326A1.5,1.5,0,0,1,50,85.826Z" fill="#fff"/>
                        <path id="Path_4" data-name="Path 4" d="M64.468,85.826H35.532a1.5,1.5,0,0,1,0-3H64.468a1.5,1.5,0,0,1,0,3Z" fill="#fff"/>
                      </g>
                      <g id="Group_3" data-name="Group 3" transform="translate(0)">
                        <path id="Ellipse_1" data-name="Ellipse 1" d="M17.5-1.5A18.995,18.995,0,0,1,30.935,30.935,19,19,0,1,1,10.1-.006,18.882,18.882,0,0,1,17.5-1.5Zm0,35a16,16,0,1,0-16-16A16.018,16.018,0,0,0,17.5,33.5Z" transform="translate(32.5 23.5)" fill="#fff"/>
                        <path id="Ellipse_2" data-name="Ellipse 2" d="M9.545-1.5A7.469,7.469,0,0,1,14.18.19a13.332,13.332,0,0,1,3.432,4.217A27.86,27.86,0,0,1,20.59,17.5a27.86,27.86,0,0,1-2.979,13.093A13.332,13.332,0,0,1,14.18,34.81,7.469,7.469,0,0,1,9.545,36.5,7.469,7.469,0,0,1,4.91,34.81a13.332,13.332,0,0,1-3.432-4.217A27.86,27.86,0,0,1-1.5,17.5,27.86,27.86,0,0,1,1.479,4.407,13.332,13.332,0,0,1,4.91.19,7.469,7.469,0,0,1,9.545-1.5Zm0,35c1.975,0,3.9-1.543,5.432-4.344A24.839,24.839,0,0,0,17.59,17.5,24.839,24.839,0,0,0,14.977,5.844C13.45,3.043,11.52,1.5,9.545,1.5S5.64,3.043,4.113,5.844A24.839,24.839,0,0,0,1.5,17.5,24.839,24.839,0,0,0,4.113,29.156C5.64,31.957,7.57,33.5,9.545,33.5Z" transform="translate(40.455 23.5)" fill="#fff"/>
                        <path id="Path_5" data-name="Path 5" d="M50,60a1.5,1.5,0,0,1-1.5-1.5v-35a1.5,1.5,0,0,1,3,0v35A1.5,1.5,0,0,1,50,60Z" fill="#fff"/>
                        <path id="Path_6" data-name="Path 6" d="M66.346,36.165H33.687a1.5,1.5,0,0,1,0-3H66.346a1.5,1.5,0,0,1,0,3Z" fill="#fff"/>
                        <path id="Path_7" data-name="Path 7" d="M66.346,48.516H33.687a1.5,1.5,0,0,1,0-3H66.346a1.5,1.5,0,0,1,0,3Z" fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </svg>      
            </span>
         </div>
         <div>
            <div id="loading" v-if="loading" class="grid grid-cols-1 w-full h-full justify-center items-center text-white">
               <div class="w-full h-full flex items-center justify-center">
                  <svg width="180" height="180" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                     <g fill="none" fill-rule="evenodd" stroke-width="2">
                        <circle cx="22" cy="22" r="1">
                              <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
                              <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="22" cy="22" r="1">
                              <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
                              <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
                        </circle>
                     </g>
                  </svg>
               </div>
            </div>
            <div v-else class="p-3 w-full h-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-3 items-center">
               <div :class="`cv-card w-full min-h-full flex flex-col justify-end overflow-hidden bg-[url('http://localhost:3000/MiladFattahWebsite.png')] bg-cover rounded-xl duration-300 `" >
                  <div class="card-content">
                     <h3 class="title font-extrabold text-xl relative w-max-content">سایت میلاد فتاح</h3>
                     <p class="body my-4 min-h-[72px] max-h-[72px] overflow-hidden">Lorem ipsum, dolor sit amet consectiores, possimus, s i saepe fugit nesciunt.</p>
                     <a href="" class="py-1 px-2 text-sm  text-gray-800 font-bold rounded-md  bg-green-500 hover:bg-green-900 hover:text-white duration-100">برو به سایت</a>
                  </div>
               </div>
            </div>
         </div>

         <div class="paginate">
               <Paginate  :currentPage="currentPage" :totalPage="5" @changepaged="changePage"/>
         </div>
      </div>
   </div>
</template>

<script>
import Article from '../../components/Article.vue'
import Paginate from '../../components/Paginate.vue'
import personalApi from '../../api' 
export default {
      components: { Article , Paginate},
      data(){
         return {
            articles : [] ,
            currentPage : 1 , 
            loading : false , 
         }
      },
      methods : {
         getCv(page = 1){
            this.loading = true ;
            setTimeout(()=>{
               personalApi.get(`photos?_page=${page}&_limit=4` )
               .then(res =>{
                  this.articles = res.data ; 
               })
               .catch(err => console.log(err))
               .finally(()=>this.loading = false );
            } , 1000);
         },
         changePage(page){
            this.getCv(page);
            this.currentPage = page ;
         }
      },
      created(){
         this.getCv();
      }
}
</script>

