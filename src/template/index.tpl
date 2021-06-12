<div class="home_page">
   <ul class="teacher_list">
      <li class="teacher_list_li" :class="$index == 0?'m-t-none':''" v-for="teacher in list">
         <div class="teacher_content">
            <div class="teacher_avatar" style="background-image: url({{teacher.image}})"></div>
            <div class="teacher_detail">


               <div class="left_box clearfix">
                  <div class="main_info f-l">
                     <ul class="teacher_base_info clearfix">
                        <li class="teacher_name  f-l">{{teacher.name}}</li>
                        <li class="teacher_position f-l">{{teacher.position}}<span v-if="teacher.isCharge == 'T'" :class="teacher.isCharge == 'T'?'is_charge':''">(收费)</span></li>
                     </ul>
                     <ul class="industy_info clearfix">
                        <li>{{teacher.industy}}</li>
                        <li class="m-b-none">{{teacher.company}}</li>
                     </ul>
                  </div>
                  <div class="chart_online f-r">
                     <div class="remain_num">

                        <a href="{{teacher.link}}">立即咨询</a>
                        <div>可提问数<span>{{teacher.remainQuestion}}</span></div>
                     </div>
                  </div>
               </div>


               <div class="teacher_skills clearfix">
                  <div class="type_name">
                     <ul class="skills_list" >
                        <li> 技能：</li>
                        <li v-for="skill in teacher.skills">
                           {{skill.text}}
                           <span v-if="$index < teacher.skills.length-1">、</span>
                           <span v-else></span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </li>
   </ul>

   <div class="become_to">
      <a href="" class="">成为导师</a>
   </div>
</div>