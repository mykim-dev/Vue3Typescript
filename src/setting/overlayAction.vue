<script lang="ts" setup></script>

<template>
  <div class="loading">
    <div class="loading__icon0 basic"></div>
    <div class="loading__icon0 cloud"></div>
    <div class="loading__icon0 ellipsis"></div>
    <div class="loading__icon0 gear"></div>
    <div class="loading__icon0 straight"></div>
    <br />
    <div class="loading__icon basic">
      <i class="c"></i><i class="a"></i><i class="l"></i><i class="s"></i>
    </div>
    <div class="loading__icon cloud">
      <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
    </div>
    <div class="loading__icon ellipsis">
      <i></i><i></i><i></i><i></i><i></i>
    </div>
    <div class="loading__icon gear">
      <i></i><i></i><i></i>
    </div>
    <div class="loading__icon straight"><i></i></div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 10px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);

  &__icon0 {
    width: 18%;
    height: 150px;
    border: 1px solid white;
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

    &.basic {
      background-image: url(@/assets/img/calsloader.gif);
    }
    &.cloud {
      background-image: url(@/assets/img/cloud.gif);
    }
    &.ellipsis {
      background-image: url(@/assets/img/index.gif);
    }
    &.gear {
      background-image: url(@/assets/img/setting.gif);
    }
    &.straight {
      background-image: url(@/assets/img/straight.gif);
    }
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 160px;
    border: 1px solid white;
    position: relative;

    & > i {
      display: block;      
      position: relative;
      // border: 1px solid red;
    }

    &.basic {
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url('data:image/svg+xml,<svg width="101" height="54" viewBox="0 0 101 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.2028 9.65087L50.293 12.1124L53.1398 10.5882C55.0309 9.57576 57.1923 9 59.5 9C66.1017 9 71.5966 13.7386 72.769 20H76.8228C75.6097 11.5193 68.3162 5 59.5 5C56.5175 5 53.7093 5.74608 51.2519 7.06179C47.5833 2.74147 42.1118 0 36 0C25.2689 0 16.5117 8.45156 16.0216 19.0616C7.04852 19.8121 0 27.3329 0 36.5C0 46.165 7.83502 54 17.5 54C17.7701 54 18.0387 53.9939 18.3058 53.9818C18.5356 53.9939 18.7671 54 19 54H88C95.1797 54 101 48.1797 101 41C101 39.9675 100.88 38.963 100.652 38H96.4879C96.8195 38.9383 97 39.9481 97 41C97 45.9706 92.9706 50 88 50H19C18.8372 50 18.6758 49.9957 18.5159 49.9873L18.3203 49.977L18.1247 49.9859C17.9179 49.9953 17.7097 50 17.5 50C10.0442 50 4 43.9558 4 36.5C4 29.4303 9.43712 23.6263 16.3551 23.0476L19.8553 22.7549L20.0174 19.2461C20.4093 10.7613 27.4162 4 36 4C40.8884 4 45.2618 6.18733 48.2028 9.65087Z" fill="white"/></svg>');
      }

      i {
        display: flex;
        justify-content: center;
        height: 60px;
        margin-top: 55px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        opacity: 0;
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;

        &.c {
          width: 60px;
          background-image: url('data:image/svg+xml,<svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0332 17.2704C12.5165 17.1949 13.6915 16.6407 14.6249 15.7758C15.5665 14.9109 16.1915 13.727 16.4249 12.2323L19.8665 11.9972C19.6332 14.3567 18.6915 16.33 17.1332 17.9002C15.5665 19.3948 13.6165 20.2597 11.2749 20.4192C8.54153 20.6544 6.11653 19.8651 4.0832 18.1353C2.04986 16.4056 0.958194 14.1216 0.724861 11.2835C0.491528 8.45376 1.27486 6.01029 2.99153 3.96146C4.79153 1.91264 7.04986 0.812651 9.79153 0.577539C12.1332 0.418 14.2415 0.972191 15.9665 2.23172C17.7665 3.56681 18.9332 5.30496 19.5582 7.66446L16.1165 7.89957C15.6499 6.48051 14.8665 5.38053 13.8499 4.67519C12.8332 3.96986 11.5082 3.65078 10.0249 3.72635C8.14986 3.88589 6.66653 4.59123 5.57486 5.92632C4.48319 7.26142 3.9332 8.91559 4.09153 10.8888C4.24986 12.8621 4.94986 14.3567 6.27486 15.5323C7.59986 16.8674 9.16653 17.4216 11.0415 17.262L11.0332 17.2704Z" fill="white"/></svg>');
          animation-name: movebasicC;          
        }
        &.a {
          width: 60px;
          background-image: url('data:image/svg+xml,<svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2837 12.8606L10.0003 5.14393L6.80032 12.8606L5.47532 16.0094L3.75866 20.2582H0.166992L8.52532 0.970703H11.6503L19.9337 20.1826H16.417L14.542 15.9338L13.292 12.8606H13.2837Z" fill="white"/></svg>');
          animation-name: movebasicA;
        }
        &.l {
          width: 45px;
          background-image: url('data:image/svg+xml,<svg viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2335 16.1192V16.9085C14.2335 18.168 13.2169 19.1085 12.0419 19.1085H0.950195V2.26442C0.950195 1.0049 1.96687 0.0644531 3.14187 0.0644531H4.23353V16.1276H14.2335V16.1192Z" fill="white"/></svg>');
          animation-name: movebasicL;
        }
        &.s {
          width: 51px;
          background-image: url('data:image/svg+xml,<svg viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.29981 0.265625C9.15814 0.265625 10.0165 0.341196 10.8748 0.584704C11.7331 0.819815 12.5165 1.1389 13.2165 1.53355C13.9165 1.9282 14.6248 2.63353 15.0915 3.42283C15.5581 4.21213 15.8748 5.15258 16.0248 6.33653H12.7415C12.4248 4.21213 11.0248 3.18772 8.5998 3.18772C7.4248 3.18772 6.56647 3.42283 5.86647 3.89305C5.16647 4.36328 4.8498 5.07701 4.8498 5.94188C4.8498 6.64721 5.08314 7.20141 5.5498 7.59606C6.01647 7.99071 6.7998 8.30139 7.89147 8.5449L10.3165 9.01512C12.2665 9.40977 13.6748 10.0395 14.6165 10.8288C15.5498 11.6937 16.0248 12.7937 16.0248 14.2128C16.0248 16.0265 15.3248 17.4371 13.9915 18.5455C12.6581 19.6539 10.9415 20.1997 8.6748 20.1997C6.40814 20.1997 4.45813 19.5699 2.9748 18.4699C1.56647 17.286 0.708138 15.6402 0.549805 13.5914H3.83314C3.99147 14.6914 4.53314 15.6402 5.3998 16.27C6.25814 16.8997 7.43314 17.2188 8.84147 17.2188C10.0165 17.2188 10.8748 16.9837 11.5748 16.5135C12.1998 16.0433 12.5915 15.4135 12.5915 14.6242C12.5915 13.4402 11.6581 12.6593 9.78314 12.2647L6.65814 11.6349C3.06647 10.9296 1.34147 9.11588 1.34147 6.20218C1.34147 4.38847 1.96647 2.9778 3.29147 1.95339C4.46647 0.853402 6.18314 0.299211 8.29147 0.299211L8.29981 0.265625Z" fill="white"/></svg>');
          animation-name: movebasicS;
        }
      }
    }
    &.cloud {
      & > i {
        display: block;
        position: absolute;
        bottom: 30px;
        left: 50%;
        background-color: white;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        
        &:nth-of-type(1) {
          width: 80px;
          height: 35px;
          margin-left: -55px;
          border-radius: 25px;
          animation-name: moveCloudSizeOne;
        }

        &:nth-of-type(2) {
          width: 90px;
          height: 40px;
          margin-left: -25px;
          border-radius: 30px;
          animation-name: moveCloudSizeTwo;
        }

        &:nth-of-type(3) {
          width: 70px;
          height: 70px;
          margin-left: -35px;
          border-radius: 50%;
          animation-name: moveCloudSizeThree;          
        }

        &:nth-of-type(4),
        &:nth-of-type(5),
        &:nth-of-type(6) {
          width: 10px;
          height: 10px;
          margin-left: -5px;
          border-radius: 5px;
        }

        &:nth-of-type(4) {
          animation-name: moveCloudSizeFour;
        }

        &:nth-of-type(5) {
          animation-name: moveCloudSizeFive;
        }

        &:nth-of-type(6) {
          animation-name: moveCloudSizeSix;
        }

        &:nth-of-type(7) {
          // animation-delay: -0.2s;
        }
      }
    }
    &.ellipsis {
      & > i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 18%;

        &::before {
          display: inline-block;
          content: "";          
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: white;
          animation: 0.8s ease-out -1.2s infinite alternate moveEllipsis;          
        }

        &:nth-of-type(1)::before {
          animation-delay: -1.0s;
        }

        &:nth-of-type(2)::before {
          animation-delay: -0.8s;
        }

        &:nth-of-type(3)::before {
          animation-delay: -0.6s;
        }

        &:nth-of-type(4)::before {
          animation-delay: -0.4s;
        }

        &:nth-of-type(5)::before {
          animation-delay: -0.2s;
        }
      }
    }
    &.gear {
    }
    &.straight {
      i {
        display: block;
        width: 70%;
        height: 5px;
        border-radius: 3px;
        background-color: #eeeeee;
        overflow: hidden;

        &::before {
          display: block;
          content: "";
          width: 0;
          height: 100%;
          background-color: var(--el-color-primary);
          animation: moveStraight 3s ease-out infinite;
        }
      }
    }
  }
}

@keyframes movebasicC {
  10% {opacity: 0;}
  20% {opacity: 1;transform: rotate(45deg);}
  30% {opacity: 1;transform: rotate(0deg);}
  85% {opacity: 1;}
  90% {opacity: 0;}
}
@keyframes movebasicA {
  20% {opacity: 0;}
  30% {opacity: 1;transform: rotate(0deg);}
  40% {opacity: 1;transform: rotate(30deg) translate(10px, -20px);}
  50% {opacity: 1;transform: rotate(0deg);}
  85% {opacity: 1;}
  90% {opacity: 0;}
}
@keyframes movebasicL {
  35% {opacity: 0;}
  45% {opacity: 1;transform: translate(0, 0);}
  55% {opacity: 1;transform: translate(0, -30px);}
  65% {opacity: 1;transform: translate(0, 0);}
  85% {opacity: 1;}
  90% {opacity: 0;}
}
@keyframes movebasicS {
  60% {opacity: 0;}
  65% {opacity: 1;transform: scale(1);}
  70% {opacity: 1;transform: scale(1.15);}  
  80% {opacity: 1;transform: scale(1);}
  85% {opacity: 1;}
  90% {opacity: 0;}
}
@keyframes moveCloudSizeOne {
  20% {height: 40px;}
  25% {transform: translate(-5px, 0);}
  30% {height: 35px;transform: initial;}
}
@keyframes moveCloudSizeTwo {
  30% {height: 50px;}
  35% {transform: translate(5px, 0);}
  40% {height: 40px;transform: initial;}
}
@keyframes moveCloudSizeThree {
  0% {width: 80px;height: 80px;margin-left:-40px;}
  20% {width: 70px;height: 70px;margin-left:-35px;}
}
@keyframes moveCloudSizeFour {
  10% {transform: translate(-80px, -45px);}
  20% {opacity: 0;}
}
@keyframes moveEllipsis {
  0% {transform: scale(1);}
	100% {transform: scale(7);background-color: var(--el-color-primary-dark-2);}  
}
@keyframes moveStraight {
  0% {width: 0;}
	100% {width: 102%;}
}
</style>