let app = new Vue({
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
                            <input type="checkbox" v-model="checkedAll" />
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
            
                <ul class="cart-items-list">
        
                    <li class="panel flex-row" v-for="cartItem of cartItems">
                        <div class="flex-column-checkbox tal">
                            <input type="checkbox" v-model="cartItem.checked">
                        </div>
                        <div class="flex-column-name tal">
                            <img :src="'./data/images/'+cartItem.cover" alt="" class="cover">
                            <span class="name">{{cartItem.name}}</span>
                        </div>
                        <div class="flex-column-price">
                            <span class="price">¥ {{(cartItem.price/100).toFixed(2)}}</span>
                        </div>
                        <div class="flex-column-quantity">
                            <span class="quantity-sub" @click="sub(cartItem)">-</span>
                            <span class="quantity-num" contenteditable>{{cartItem.quantity}}</span>
                            <span class="quantity-add" @click="add(cartItem)">+</span>
                        </div>
                        <div class="flex-column-total">
                            <span class="total">¥ {{(cartItem.price * cartItem.quantity / 100).toFixed(2)}}</span>
                        </div>
                        <div class="flex-column-operation">
                            <span class="operation-delete" @click="remove(cartItem)">删除</span>
                        </div>
                    </li>
        
                </ul>

                <div class="cart-footer panel flex-row">

                    <div>
                        <input type="checkbox" v-model="checkedAll" />
                        <span>全选</span>
                        <span>删除</span>
                    </div>
                    <div>
                        <span>一共选择了 <strong class="quantity">9</strong> 件商品，总计 <strong class="total">¥ 40439.00</strong> 元</span>
                        <span :class="pay-btn disabled">立即支付</span>
                    </div>

                </div>

        
                <div class="pagination-container">
                    
                    <div class="pagination">
                        <a href="" class="prev">上一页</a>
                        <a href="">1</a>
                        <a href="">2</a>
                        <a href="">3</a>
                        <a href="" class="current">4</a>
                        <a href="">5</a>
                        <a href="">6</a>
                        <a href="">7</a>
                        <a href="">8</a>
                        <a href="" class="next">下一页</a>
                    </div>
        
                </div>

                

            </div>

        </div>
    </div>
    `,

    // obj.a = 1;
    data: {
        cartItems,
        a: 100
    },

    // a 的变化为影响 b, c 的变化
    // 如果使用计算属性  

    // Object.defineProperty(obj, 'a', {get(){}, set(){}})
    // checkedAll = ...get();
    computed: {
        checkedAll: {
            get() {
                // 依赖当前get对返回值来更新数据对，所以，这里不支持异步去更新数据
                return this.cartItems.every(item => item.checked);
            },
            set(checked) {
                this.cartItems = this.cartItems.map(item => ({
                    ...item,
                    checked
                }));
            }
        },
        b: {
            get() {}
        },
        c: {
            get() {}
        }
    },

    watch: {
        a() {
            this.b;
            this.c;
            // 不依赖返回的值去更新数据，所以可以使用异步对数据进行操作

            // 当数据的变化需要做的事情如数据的更新无关的时候，如果当前这个数据发生变化，跳转路由，记录日志……
        }
    },

    methods: {
        sub(cartItem) {
            if (cartItem.quantity > 1) {
                cartItem.quantity--;
            }
        },
        add(cartItem) {
            cartItem.quantity++;
        },
        remove(cartItem) {
            this.cartItems = this.cartItems.filter(item => item != cartItem);
        }
    }
});

app.$mount('#app');