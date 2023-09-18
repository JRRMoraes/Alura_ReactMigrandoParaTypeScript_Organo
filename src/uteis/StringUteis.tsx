export function InterfacePropertyToString(property: (object: any) => void) {
    var chaine = property.toString();
    var arr = chaine.match(/[\s\S]*{[\s\S]*\.([^\.; ]*)[ ;\n]*}/);
    return arr![1]!;
}

