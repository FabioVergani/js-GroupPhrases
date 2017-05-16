function raggruppa(m){//frasi
 function f(A,B,C,D){//console.dir(arguments);
	var m=[],p;
	for(let e=/\S+/g, a=A[0].match(e), b=B.match(e), i=0; ((e=b[i])!==a[i])!==true; ++i){m.push(e)};//console.log(m.length,m,B,A.item);
	const o=x, J=D.length-1, L=m.length, R=L<A[1];//console.info(R,C,J,C<J)
	if(R&&(C<J)){
	 p=f([D[C+1],0],B,K,D)
	}else{
	 p=m.join('\u0020');
	 if(p===''||R&&(C===J)){p=B};//solitari
	 if(m=o[p]){m[m.length]=B}else{o[p]=[B]};
	 p=[B,L];//frase,recursions
	};
	return p;
 }
 const K=Number.MAX_VALUE,x={};
 m.reduce(f,[m[1],0],x);
 return x;
}
//=========================
var grouped=raggruppa([
'aaa bbb ccc 1ddd',
'aaa bbb ccc 2ddd',
'aaa bbb 3ddd eee',
'aaa bbb 4ddd eee',
'aaa bbb 3ddd zzz',
'aaa bbb 4ddd zzz',
'aaa bbb eee 3ddd',
'aaa bbb eee 4ddd',
'fff ggg',
'hhh iii lll',
'hhh iii lll mmm',
'hhh nnn lll'
]);
document.write('<pre>'+JSON.stringify(grouped,0,4)+'</pre>');


