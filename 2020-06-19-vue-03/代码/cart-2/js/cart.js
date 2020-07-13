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
        
                    <li class="panel flex-row" v-for="cartItem of showCartItems">
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
                        <span @click="multiDelete">删除</span>
                    </div>
                    <div>
                        <span>一共选择了 <strong class="quantity">{{quantity}}</strong> 件商品，总计 <strong class="total">¥ {{total}}</strong> 元</span>
                        <span class="pay-btn disabled">立即支付</span>
                    </div>

                </div>

        
                <div class="pagination-container">
                    
                    
                    <kkb-pagination
                        :total="cartItems.length"
                        v-model="cPage"
                        :prepage="cPrepage"
                    ></kkb-pagination>
        
                </div>

                

            </div>

        </div>
    </div>
    `,

    // obj.a = 1;
    data: {
        cartItems,
        cPage: 1,
        cPrepage: 2
    },

    // a 的变化为影响 b, c 的变化
    // 如果使用计算属性  

    // Object.defineProperty(obj, 'a', {get(){}, set(){}})
    // checkedAll = ...get();
    computed: {
        showCartItems() {
            // 模板中根据分页显示的数据
            let start = (this.cPage - 1) * this.cPrepage;
            let end = start + this.cPrepage;
            return this.cartItems.slice(start, end);
        },
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
        total() {
            return (this.cartItems.filter(item => item.checked).reduce( (prev, current) => {
                return prev + (current.quantity * current.price)
            }, 0 ) / 100).toFixed(2);
        },
        quantity() {
            return this.cartItems.filter(item => item.checked).reduce( (prev, current) => {
                return prev + current.quantity
            }, 0 );
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
        },
        multiDelete() {
            console.log('multiDelete');
            // 把每一个 checked 为 true 的过滤掉
            this.cartItems = this.cartItems.filter(item => !item.checked);
        }
    }
});

app.$mount('#app');