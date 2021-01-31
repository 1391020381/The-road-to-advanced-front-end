function create(Cls,attributes,...children){
    console.log(arguments)
    let o
    if(Cls == 'string'){
        o = new Wraper()
    }else{
        o = new Cls({});
    }
    for(let name in attributes){
       // o[name] = attributes[name];
       o.setAttribute(name,attributes[name])
    }
    for(let child of children){
        if(typeof child ==='string'){
            child = new Text(child)
        }
        o.children.push(child)
    }
    
    return o

}
class Text {
    constructor(text){
        this.children = []
        this.root = document.createElement(text)
    }
    mountTo(parent){
        parent.appendChild(this.root)
    }
}
class Wraper {
    constructor(type){
        this.children = []
        this.root = document.createElement(type)
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value)
    }
    appendChild(child){
       this.children.push(child)
    }
    mountTo(parent){
        parent.appendChild(this.root)
        for(let child of this.children){
            child.mountTo(this.root) // 挂载到父节点
        }
    }
    
}


class Div {
    constructor(config){
        this.children = []
        this.root = document.createElement('div')
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value)
    }
    appendChild(child){
       this.children.push(child)
    }
    render(){
        return <article>
            <header>I`m a  herader</header>
            {this.slot}
            <footer>I`m a footer</footer>
        </article>
    }
    mountTo(parent){
        // parent.appendChild(this.root)
        // for(let child of this.children){
        //     child.mountTo(this.root) // 挂载到父节点
        // }
        this.slot = <div></div>
        for(let child of this.children){
            this.slot.appendChild(child)
        }
        this.render().mountTo(parent)
    }
    
}

let component = <Div id="a" class="b" style="width:100px;height:100px;background:red;">
        <Div></Div>
        <Div></Div>
        <Div></Div>
</Div>

component.mountTo(document.body)
/** 
 * 
 * create(Parent, {
    id: "a",
    "class": "b"
  }, 
  create(Child, null), 
  create(Child, null), 
  create(Child, null)
  );
*/

console.log(component)