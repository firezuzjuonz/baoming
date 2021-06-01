<div class="home_page">
   <ul class="teacher_list">
      <li class="teacher_list_li" v-for="teacher in list">
         <a href={{teacher.link}}>
            <div class="teacher_avatar" style="background-image: url({{teacher.image}})"></div>
         </a>
      </li>
   </ul>
</div>