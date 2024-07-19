//! Union Type

type UnionType = string | number;

function showType(arg: UnionType) {
  console.log(arg);
}

showType("test"); // Output test

showType(7); // Output 7

//! Intersection Type

type LeftType = {
  id: number;
  left: string;
};

type RightType = {
  id: number;
  right: string;
};

type IntersectionType = LeftType & RightType;

function showTypeIntersection(args: IntersectionType) {
  console.log(args);
}

showTypeIntersection({ id: 15, left: "left", right: "right" });

//=> Output :{ id: 100, left: 'left', right: 'right' }
/*=> id is a shared Property between RightType and LeftType :
    If it has the same name and type, the resulting type will have that property with the given type.
    If it has the same name but different types,the resulting type will have property never => TypeScript will require that the merged type satisfies both type constraints.
*/
