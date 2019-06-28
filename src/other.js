import React, {Component} from 'react'






class TableDetails extends Component{
    render() {
        const products = this.props.products;
        let name = products.stocked ? products.name:<span style={{color:'red'}}>{products.name}</span>
        return (
            <tr>
                <td>{name}</td>
                <td>{products.price}</td>
            </tr>
        );
    }
}


class FormCategory extends Component{
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
        let onlyhead =null;
        const products = this.props.products;
        products.forEach((products)=>{
            if(products.category !==onlyhead){
               rows.push(
                   <FormCategory
                       category={products.category}
                       key={products.category}
                   />
                   )
            }
            rows.push(
                <TableDetails
                    key ={products.name}
                    products={products}/>
            )
            onlyhead = products.category
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}


export default class outerBorder  extends Component{
    render() {
        return (
            <div>
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


