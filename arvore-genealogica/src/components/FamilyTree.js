import React from 'react';
import Tree from 'react-d3-tree';

const myTreeData = [
   {
      name: 'Fruttuoso Bovo', // Tataravô
      children: [
         {
            name: 'Bisavô 1',
            children: [
               {
                  name: 'João Bovo',
                  children: [
                     {
                        name: 'Leomir Bovo',
                        children: [
                           { name: 'Guilherme Bovo', children: [] },
                           { name: 'Eduardo Bovo', children: [] },
                        ],
                     },
                     {
                        name: 'Leila Bovo',
                        children: [
                           // Adicione filhos aqui se quiser
                        ],
                     },
                     {
                        name: 'Lilian Bovo',
                        children: [
                           { name: 'Gabriele Bovo', children: [] },
                           { name: 'Bruna Bovo', children: [] },
                        ],
                     },
                  ],
               }
            ],
         },
         {
            name: 'Bisavó',
            children: [
               {
                  name: 'Avó Materna',
                  children: [
                     {
                        name: 'Mãe',
                        children: [
                           {
                              name: 'Eu e meus irmãos',
                              children: [
                                 { name: 'Eu' },
                                 { name: 'Irmão 1' },
                                 { name: 'Irmão 2' },
                              ],
                           },
                        ],
                     },
                     {
                        name: 'Tia 1',
                        children: [
                           { name: 'Primo 6' },
                           { name: 'Primo 7' },
                        ],
                     },
                     {
                        name: 'Tia 2',
                        children: [
                           { name: 'Primo 8' },
                           { name: 'Primo 9' },
                        ],
                     },
                  ],
               },
            ],
         },
      ],
   },
];

const FamilyTree = () => {
   const containerStyles = {
      width: '100%',
      height: '700px', // aumentei para acomodar mais nós
   };

   return (
      <div style={containerStyles}>
         <Tree
            data={myTreeData}
            orientation="vertical"
            pathFunc="elbow"
            translate={{ x: 300, y: 50 }} // ajustar posição inicial
            collapsible={true}
         />
      </div>
   );
};

export default FamilyTree;
