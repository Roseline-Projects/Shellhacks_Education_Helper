import { useState } from 'react'
import './App.css'
import Thought from './components/Thought'
import ThoughtEditor from './components/ThoughtEditor'
import Readings from './components/Readings'
import ThoughtStage from './components/ThoughtStage'
import Level from './components/Level'
import StudentInfo from './components/StudentInfo'
import ThoughtNetwork from './components/ThoughtNetwork'

function App() {

  return (
    <>
    <div className='main-body-container'>
      <div className='prompt-container'>
        <Readings prompt='Explain why the ending of jjk was [redacted].' articles='Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie sollicitudin auctor cursus ullamcorper litora tellus. Mollis habitant ultrices pulvinar in ex ut habitasse. Ridiculus non magna curabitur a interdum. Interdum velit sapien himenaeos ultricies; est mauris aliquam. Tincidunt etiam ac risus nec sollicitudin sapien viverra luctus. Sed libero ullamcorper pulvinar purus facilisis congue sollicitudin a.

          Montes malesuada odio volutpat tempus placerat. Penatibus tincidunt magna, sapien lacus a augue? Nostra porta ornare iaculis; mus habitasse rutrum. Fusce integer varius nulla neque magna. Integer eget id blandit dui suspendisse vestibulum. Vel nulla vivamus penatibus ut facilisis. Blandit magna fringilla hac elit pellentesque dui.

        Primis tempor dignissim natoque ex torquent adipiscing est. Montes litora dis nunc aptent erat. Venenatis nam nunc turpis eu orci turpis fames. Sem praesent ornare lacinia primis class dis suscipit! Et curabitur aptent massa condimentum lectus. Morbi ultricies rutrum ut viverra conubia scelerisque. Platea elementum nibh, dictumst ad vivamus etiam nam eros.

        Aptent arcu pulvinar sollicitudin ante tortor metus. Torquent amet amet litora malesuada montes cras suscipit. Ornare senectus felis mollis nec interdum vehicula. Consectetur ornare nulla conubia egestas venenatis volutpat aptent. Praesent risus magnis conubia viverra, odio vestibulum tincidunt fringilla. Eros mauris eget per vitae morbi. Neque arcu facilisi sapien dolor ornare maximus mollis!

        Feugiat consectetur mattis mi eu cursus ultricies consequat a. Proin ultrices maecenas penatibus porttitor ipsum velit molestie id lectus. Mollis feugiat erat aliquet luctus ultrices volutpat condimentum nascetur sit. Platea maximus lacinia eu commodo lectus. Pulvinar dictum dis luctus vivamus senectus suscipit. Facilisi consectetur dolor justo nisi ligula porttitor mattis volutpat neque. Enim est pulvinar nascetur tortor hendrerit scelerisque massa pulvinar bibendum. Lacinia in condimentum justo nisl ultrices tristique ad. Dapibus diam blandit auctor, rutrum elementum porttitor faucibus faucibus. Venenatis scelerisque malesuada congue; varius ante libero.'
        />

      </div>
      <div className='planner-container'>
        <div>
        <div className='student-info-container'>
          <StudentInfo name='insert name here' class='Eng Lang & Lit' assignment='AP Rhetorical Practice'/>

        </div>
        <div className='level-container'>
          <Level/>

        </div>
        </div>
        <div className='thought-stage-container'>
          {/* <ThoughtStage/> */}
          <ThoughtNetwork/>
          
          <Thought name='Test' text='testing testing 123 testing testing domain expansion testing testing'/>

        </div>

      </div>
      <div className='node-edit-container'>
        <ThoughtEditor name='Placeholder' 
          question1='Why have I done this to myself?' 
          question2='I could be sleeping rn fr' 
          question3='hope this helps somebody tho'/>
      </div>

    </div>
    </>
  )
}

export default App
