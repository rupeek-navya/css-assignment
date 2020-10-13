function foo() {
    console.log( this ); 
}
foo();
new_foo=foo.bind({x:1})
new_foo();
