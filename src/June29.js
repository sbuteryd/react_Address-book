import React,{Component} from 'react'



class ProductDetails  extends Component{
    render() {
        const product = this.props.product;
        let name = product.stocked ? product.name:<span style={{color:'red'}}>{product.name}</span>
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}


class ProductType extends Component{
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th>{category}</th>
            </tr>
        );
    }
}

class Table extends Component{
    render() {
        const rows =[];
        let headName =null;
        this.props.products.forEach((product)=>{
            if(product.category !== headName){
                rows.push(
                    <ProductType
                        category={product.category}
                        key={product.category}
                    />
                );
                console.log(product.category);

            }
            rows.push(
                <ProductDetails
                    product={product}
                    key={product.name}
                />
            );

            headName = product.category

        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ptice</th>
                     </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}


class SearchTable  extends Component{
    render() {
        return (
            <form action="">
                <input type="text"/>
                <p>
                    <input type="checkbox"/>
                    Only show products is stock
                </p>
            </form>
        );
    }
}


export  default class Frame  extends Component{
    render() {
        return (
            <div>
                <SearchTable/>
                <Table products={PRODUCTS}/>
            </div>
        );
    }
}
const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];