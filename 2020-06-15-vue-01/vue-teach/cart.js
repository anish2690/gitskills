const app = new Vue({
    template: `
    <div id="app">
        <header id="header">
            <a href="/" id="logo"></a>
    
            <nav id="nav">
                <a href="">手机</a>
                <a href="">笔记本</a>
                <a href="">家居</a>
            </nav>
    
            <div id="user">
                <a href="">登录</a>
                <a href="">注册</a>
            </div>
        </header>
        <div id="main">
    
            <div class="cart">
    
                <div class="panel flex-row">
                    
                    <div class="flex-column-checkbox tal">
                        <label>
                            <input type="checkbox" v-model="checkedAll"/>
                            <span class="txt">全选</span>
                        </label>
                    </div>
                    <div class="flex-column-name tal">
                        商品
                    </div>
                    <div class="flex-column-price">
                        单价
                    </div>
                    <div class="flex-column-quantity">
                        数量
                    </div>
                    <div class="flex-column-total">
                        小计
                    </div>
                    <div class="flex-column-operation">
                        操作
                    </div>
    
                </div>
            
                <ul class="cart-items-list" >
                    <li class="panel flex-row" v-for="(item,index) in showCartPreViews">
                        <div class="flex-column-checkbox tal">
                            <input type="checkbox" v-model="item.checked">
                        </div>
                        <div class="flex-column-name tal">
                            <img :src="'./data/images/'+item.cover" alt="" class="cover">
                            <span class="name">{{item.name}}</span>
                        </div>
                        <div class="flex-column-price">
                            <span class="price">¥{{(item.price/100).toFixed(2)}}</span>
                        </div>
                        <div class="flex-column-quantity">
                            <span class="quantity-add" @click="deleteCB(item)">-</span>
                            <span class="quantity-num" contenteditable>{{item.quantity}}</span>
                            <span class="quantity-sub" @click="addCB(item)">+</span>
                        </div>
                        <div class="flex-column-total">
                            <span class="total">¥{{((item.quantity * item.price)/100).toFixed(2)}}</span>
                        </div>
                        <div class="flex-column-operation">
                            <span class="operation-delete" @click="handClickDelete(item)">删除</span>
                        </div>
                    </li>
                </ul>
    
                <div class="cart-footer panel flex-row">
    
                    <div>
                        <input type="checkbox" v-model="checkedAll"/>
                        <span>全选</span>
                        <span @click="headClickRm">删除</span>
                    </div>
                    <div>
                        <span>一共选择了 <strong class="quantity">{{getAmount.amount}}</strong> 件商品，总计 <strong class="total">¥ {{(getAmount.sum).toFixed(2)}}</strong> 元</span>
                        <span :class="{'pay-btn':isActive, 'disabled':!setIsAbled}">立即支付</span>
                    </div>
    
                </div>
    
        
                <div class="pagination-container">
                    
                   <my-component :total="total" :prepage.sync="prepage" :page.sync="page" ref="myCom">
                   <input type='text' style='text-align:center' ref="input"> <button @click="goToPreViews">跳转</button>
                   </my-component>
                   
                </div>
            </div>
        </div>
    </div>
    `,

    // 在可复用性组件中，data的数据对象，一定是函数式，并且返回一个对象，这是基于引用问题，在vue-cli中，组件化开发必须是函数式
    // data() {
    //     return {
    //         cartItems,
    //         sum: 0,
    //         amount: 0,
    //         isActive: true,
    //         // isAbled: !setIsAbled ? true : false,
    //     }
    // },

    // data在单个组件中，可以使用对象的形式
    data: {
        cartItems,
        isActive: true,
        outPut: null,
        total: cartItems.length,
        prepage: 5,
        page: 1
    },
    mounted() {
        
    },
    methods: {
        deleteCB(item) {
            if (item.quantity > 1) {
                item.quantity--;
            }
        },
        addCB(item) {
            item.quantity++;
        },
        handClickDelete(items) {
            this.cartItems = this.cartItems.filter(item => item != items);
        },
        headClickRm() {
            this.cartItems = this.cartItems.filter(item => !item.checked);
        },
        /**
         * ref不仅可以在原生Dom中使用，也可以在组件中使用
         * 在dom中使用，会返回原生Dom对象;
         * 在组件中使用，会返回该组件对象，对象包含着组件实例;
         */
        goToPreViews() {
            this.$refs.myCom.handClickPages(this.$refs.input.value);
        }
    },
    computed: {
        checkedAll: {
            // this指向根的实例化对象
            get() {
                return this.cartItems.every(item => {
                    return item.checked;
                })
            },
            set(checked) {
                this.cartItems = this.cartItems.map(item => ({
                    ...item,
                    checked
                }))
            }
        },
        setIsAbled: {
            get() {
                const res = this.cartItems.find(item => item.checked);
                if (res) {
                    console.log(res.checked)
                    return res.checked;
                }

            }
        },
        getAmount: {
            get() {
                const res = this.cartItems.filter(item => item.checked);
                let amount = 0;
                let sum = 0;
                res.forEach((item) => {
                    amount += item.quantity;
                    sum += ((item.quantity * item.price) / 100);
                })
                return { amount, sum };
            }
        },
        showCartPreViews() {
            //处理分页视图层逻辑
            let start = (this.page - 1) * this.prepage;
            let end = start + this.prepage;
            return this.cartItems.slice(start, end);
        }
    },
})
app.$mount("#app")