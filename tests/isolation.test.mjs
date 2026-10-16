import test from 'node:test';
import assert from 'node:assert/strict';
import { isDedicatedProject, isDedicatedBucket } from '../lib/firebase-isolation.ts';
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
const id = 'tarjeta-joven-salvador-2026';
test('solo acepta el proyecto nuevo esperado', () => {
  assert.equal(isDedicatedProject(id,id),true);
  for (const [project,expected] of [['',''],[id,'otro-proyecto'],['tarjeta-elota','tarjeta-elota'],['joven-escuinapa','joven-escuinapa'],['demo-sinaloa','demo-sinaloa']]) assert.equal(isDedicatedProject(project,expected),false);
});
test('un bucket de otro municipio queda bloqueado', () => {
  assert.equal(isDedicatedBucket(`${id}.firebasestorage.app`,id),true);
  assert.equal(isDedicatedBucket(`${id}.appspot.com`,id),true);
  assert.equal(isDedicatedBucket('otro-proyecto.firebasestorage.app',id),false);
});
test('se conservaron los dos archivos oficiales byte a byte', () => {
  const assetManifest=JSON.parse(readFileSync(new URL('../docs/activos-oficiales.json',import.meta.url)));
  for(const asset of assetManifest.archivos){
    const bytes=readFileSync(new URL('../public/'+asset.archivo,import.meta.url));
    assert.equal(createHash('sha256').update(bytes).digest('hex'),asset.sha256);
  }
});
test('no quedaron referencias operativas ni credenciales de otro programa', () => {
  function check(dir){for(const entry of readdirSync(dir,{withFileTypes:true})){
    const path=dir+'/'+entry.name;
    if(entry.isDirectory()) check(path);
    else if(/\.(ts|tsx|css|json|rules)$/.test(path)) assert.doesNotMatch(readFileSync(path,'utf8'),/imjuelota|imju-elota|panel-imju-elota|23\.92173|-106\.89264|TJE-/i,path);
  }}
  check('app');check('public');
});
