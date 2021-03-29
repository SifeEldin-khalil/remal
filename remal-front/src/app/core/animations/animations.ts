import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";


export let fadeIn =  trigger('fadeIn', [ 
  state('false', style({
    opacity: 0,
  })),   
  transition('false => true', [
    style({opacity: 0}),
    animate(1000, style({opacity: 1}))
  ]),
])


export let slideInOut =  trigger('slideInOut', [
    state('false', style({
      opacity: 0,
    })), 
    transition('false => true', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.5s  ease-in')
    ]),
    transition('true => false', [
      animate('0.5s ease-out', style({ transform: 'translateX(100%)' }))
    ])
  ])

  export let slideInOutEnter =  trigger('slideInOutEnter', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.5s  ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({ transform: 'translateX(100%)' }))
    ])
  ])

  
  export let slideUpDown =trigger('slideUpDown', [
    state('false', style({
      opacity: 0,
    })), 
    transition('false => true', [
      style({transform: 'translateY(-100%)'}),
      animate('0.5s ease-in', style({transform: 'translateY(0%)',opacity:1}))
    ]),
    transition('true => false', [
      animate('0.5s ease-in', style({transform: 'translateY(-100%)',opacity:1}))
    ])
  ])

  export let slideUpDownEnter =trigger('slideUpDownEnter', [
    
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('0.5s ease-in', style({transform: 'translateY(0%)',opacity:1}))
    ]),
    transition(':leave', [
      animate('0.5s ease-in', style({transform: 'translateY(-100%)',opacity:1}))
    ])
  ])


  export const $animations = [

    trigger('animate', [
  
      state('idle', style({ opacity: 0 }) ),
  
      transition('* => landing', [
        style({
          transform: 'scale(1.2)',
          opacity: 0
        }), 
        animate('{{timing}} ease', style('*'))
      ], { params: { timing: '2s'}}),
  
      transition('* => pulse', [
        style('*'),
        animate('{{timing}} ease-in-out', 
          keyframes([
            style({ transform: 'scale(1)' }),
            style({ transform: 'scale(1.05)' }),
            style({ transform: 'scale(1)' })
          ])
        )], { params: { timing: '1s'}}
      ),
  
      transition('* => beat', [
        style('*'),
        animate('{{timing}} cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          keyframes([
            style({ transform: 'scale(0.8)' }),
            style({ transform: 'scale(1.5)' }),
            style({ transform: 'scale(1)' })
          ])
        )], { params: { timing: '500ms'}}
      ),
  
      transition('* => heartBeat', [
        style('*'),
        animate('{{timing}} ease-in-out', 
          keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(1.3)', offset: 0.14 }),
            style({ transform: 'scale(1)', offset: 0.28 }),
            style({ transform: 'scale(1.3)', offset: 0.42 }),
            style({ transform: 'scale(1)', offset: 0.70 })
          ])
        )], { params: { timing: '1s'}}
      ),
  
      transition('* => fadeIn', [
        style({ opacity: 0 }),
        animate('{{timing}} ease-in', style('*'))
      ], { params: { timing: '1s'}}),
  
      transition('* => fadeInRight', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('{{timing}} ease-in', style('*'))
      ], { params: { timing: '1s'}}),
  
      transition('* => fadeInLeft', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('{{timing}} ease-in', style('*'))
      ], { params: { timing: '1s'}}),
  
      transition('* => fadeInUp', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('{{timing}} ease-in', style('*'))
      ], { params: { timing: '1s'}}),
  
      transition('* => fadeInDown', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('{{timing}} ease-in', style('*'))
      ], { params: { timing: '1s'}}),
  
      transition('* => zoomIn', 
        animate('{{timing}} ease-in', 
          keyframes([
            style({ opacity: 0, transform: 'scale(0.3)' }),
            style({ opacity: 1, transform: 'scale(0.65)' }),
            style({ opacity: 1, transform: 'scale(1)' })
          ])
        ), { params: { timing: '1s'}}
      ),
      
      transition('* => bumpIn', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate("{{timing}} cubic-bezier(.8, -0.6, 0.2, 1.5)", 
          style({ transform: 'scale(1)', opacity: 1 }))
      ], { params: { timing: '500ms'}}),
  
      transition('fadeOut => void', [
        animate('{{timing}} ease-in', style({ opacity: 0 }))
      ]),
  
      transition('fadeOutRight => void', [
        animate('{{timing}} ease-in', style({ opacity: 0, transform: 'translateX(20px)' }))
      ], { params: { timing: '1s'}}),
  
      transition('fadeOutLeft => void', [
        animate('{{timing}} ease-in', style({ opacity: 0, transform: 'translateX(-20px)' }))
      ], { params: { timing: '1s'}}),
  
      transition('fadeOutDown => void', [
        animate('{{timing}} ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ], { params: { timing: '1s'}}),
  
      transition('fadeOutUp => void', [
        animate('{{timing}} ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ], { params: { timing: '1s'}}),
  
      transition('zoomOut => void', 
        animate('{{timing}} ease-in', 
          keyframes([
            style({ opacity: 1, transform: 'scale(1)' }),
            style({ opacity: 0, transform: 'scale(0.3)' }),
            style({ opacity: 0, transform: 'scale(0.3)' })
          ])
        ), { params: { timing: '1s'}}
      ),
    ])
  ];