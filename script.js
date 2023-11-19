let toolbaroptions=[
    ["bold","italic","underline","strike"],
    [{header:[1,2,3,4,5,6,false]}],
    [{list:"ordered"},{list:"bullet"}],
    [{script:"sub"},{script:"super"}],
    [{index:"+1"},{index:"-1"}],
    [{align:[]}],
    [{size:['small','large','huge',false]}],
    ["image","link","video","formula"],
    [{color:[]},{background:[]}],
    [{font:[]}],
    ['code-block'],
]

var quill = new Quill('#editor',{
    modules:{
        toolbar:toolbaroptions,
    },
    theme:'snow'
});
