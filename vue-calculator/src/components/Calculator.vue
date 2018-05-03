<template>
    <div class="calculator">
        <div class="calculator__display">
            <p class="calculator__display-text">
                {{currentValue}}
            </p>
        </div>
        <div class="calculator__keys">
            <button class="calculator__btn" v-for="(num, index) in numValues" :key="index" @click="appendValue">
                {{num}}
            </button>
            <button @click="performOperation" class="calculator__btn">+</button>
            <button @click="performOperation" class="calculator__btn">-</button>
            <button @click="performOperation" class="calculator__btn">x</button>
            <button @click="performOperation" class="calculator__btn">/</button>
            <button @click="performOperation" class="calculator__btn">=</button>
        </div>
    </div>
</template>

<script>
import ValueService from '../services/value.service';
const valueService = new ValueService();
export default {
  data: function() {
    return {
      currentValue: '0',
      numValues: valueService.getValues(),
      heldValue: 0,
      tempValue: 0,
      heldOperation: ''
    };
  },
  methods: {
    appendValue: function(e) {
      if (this.currentValue === '0') {
        this.currentValue = e.target.innerText;
      } else {
        this.currentValue += e.target.innerText;
      }
    },
    performOperation: function(e) {
      switch (e.target.innerText) {
        case '+':
          this.tempValue = parseInt(this.currentValue);
          this.heldOperation = '+';
          this.currentValue = '0';
          break;
        case '-':
          this.tempValue = parseInt(this.currentValue);
          this.heldOperation = '-';
          this.currentValue = '0';
          break;
        case 'x':
          this.tempValue = parseInt(this.currentValue);
          this.heldOperation = 'x';
          this.currentValue = '0';
          break;
        case '/':
          this.tempValue = parseInt(this.currentValue);
          this.heldOperation = '/';
          this.currentValue = '0';
          break;
        case '=':
          let num = parseInt(this.currentValue);
          switch (this.heldOperation) {
            case '+':
              this.tempValue += num;
              this.currentValue = this.tempValue.toString();
              break;
            case '-':
              this.tempValue -= num;
              this.currentValue = this.tempValue.toString();
              break;
            case 'x':
              this.tempValue *= num;
              this.currentValue = this.tempValue.toString();
              break;
            case '/':
              this.tempValue /= num;
              this.currentValue = this.tempValue.toString();
              break;
          }
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.calculator {
  border: 3px solid rgba(26, 149, 165, 0.637);
  border-radius: 5px;
  box-shadow: 0 2rem 3rem rgba(#000000, 0.2);
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 3rem;
  &__display {
    width: 90%;
    font-size: 2rem;
    border: 2px solid darkslategrey;
    border-radius: 5px;
    background-color: rgba(47, 79, 79, 0.5);
    text-align: right;
    padding: 0 1rem;
    line-height: 2rem;
    &-text {
      color: lightgray;
    }
  }

  &__keys {
    padding: 1rem;
    display: grid;
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  &__operations {
  }

  &__btn {
    height: 3rem;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: rgba(lightsalmon, 0.4);
    font-size: 1.5rem;
    color: rgba(102, 102, 102, 0.678);
    cursor: pointer;
    transition: all 0.2s ease-out;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 0.5rem 1rem rgba(#000000, 0.2);
    }
    &:active {
      transform: translateY(0);
    }
  }
}
</style>


