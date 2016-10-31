import repository from './repository';
import component from './component';
import Fx from './fx';
import asyncModule from './async';
import inflector from './inflector';
import setup from './setup';
import T from 'template-binding';

let xin = window.xin = (id) => repository.get(id);

xin.put = repository.put;
xin.define = repository.define;
xin.v = repository.v;
xin.mix = repository.mix;
xin.filter = T.Filter;
xin.Component = component.Component;
xin.base = component.base;
xin.Fx = Fx;
xin.async = asyncModule;
xin.inflector = inflector;
xin.setup = setup;

export default xin;