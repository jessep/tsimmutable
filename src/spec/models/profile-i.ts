import * as Immutable from 'immutable';

import {
Avatar,
Profile,
} from './profile';

export {
Avatar,
Profile,
};

import * as enums from './enums';
import * as events from 'events';

/**
* Map interface for Avatar with specialized getters and setters.
*/

export interface AvatarMap extends ImmutableMethods<string, any, AvatarMap> {

    $AvatarMap: AvatarMap

    get(key: 'src', defaultValue?: string): string
    set(key: 'src', value: string): AvatarMap


    get(key: string, defaultValue?: any): any;
    set(key: string, value: typeof undefined): AvatarMap;

    toJS(): Avatar
}



/**
* Map interface for Avatar with specialized getters and setters.
*/

export interface AvatarRecordShape extends ImmutableMethods<string, any, AvatarRecordShape> {

    $AvatarRecordShape: AvatarRecordShape

    src: string
    get(key: 'src', defaultValue?: string): string
    set(key: 'src', value: string): AvatarRecordShape


    get(key: string, defaultValue?: any): any;
    set(key: string, value: typeof undefined): AvatarRecordShape;

    toJS(): Avatar
}


/**
 * Default fields that must be provided in AvatarRecord.
 */
export interface AvatarRecordDefaults {
    src: string
}

/**
 * Typed AvatarRecord constructor.
 */
export let AvatarRecordCtor: RecordCtor<AvatarRecordDefaults, AvatarRecordShape> = Immutable.Record as any;

/**
 * Special method to parse AvatarRecord with all the dependencies.
 */
export function parseAvatarRecord(value: Avatar, deps: any): AvatarRecordShape {
    var recordWalker = function(value, key) {
        switch (true) {

            default: return fromJSDefault(value);
        }
    };

    var result: any = {};
    for (var k in value) {
        if (value.hasOwnProperty) {
            result[k] = recordWalker(value[k], k);
        }
    }

    return new deps.AvatarRecord(result);
}

export class AvatarRecord extends AvatarRecordCtor({
    src: null,
}) {
    static fromJS(value: Avatar, deps: any): AvatarRecord {
        return parseAvatarRecord(value, deps)
    }
}

/**
* Map interface for Profile with specialized getters and setters.
*/

export interface ProfileMap extends ImmutableMethods<string, any, ProfileMap> {

    $ProfileMap: ProfileMap

    get(key: 'firstName', defaultValue?: string): string
    set(key: 'firstName', value: string): ProfileMap

    get(key: 'lastName', defaultValue?: string): string
    set(key: 'lastName', value: string): ProfileMap

    get(key: 'avatar', defaultValue?: AvatarMap): AvatarMap
    set(key: 'avatar', value: AvatarMap): ProfileMap

    get(key: 'theme', defaultValue?: enums.Theme): enums.Theme
    set(key: 'theme', value: enums.Theme): ProfileMap

    get(key: 'events', defaultValue?: events.EventEmitter): events.EventEmitter
    set(key: 'events', value: events.EventEmitter): ProfileMap


    get(key: string, defaultValue?: any): any;
    set(key: string, value: typeof undefined): ProfileMap;

    toJS(): Profile
}



/**
* Map interface for Profile with specialized getters and setters.
*/

export interface ProfileRecordShape extends ImmutableMethods<string, any, ProfileRecordShape> {

    $ProfileRecordShape: ProfileRecordShape

    firstName: string
    get(key: 'firstName', defaultValue?: string): string
    set(key: 'firstName', value: string): ProfileRecordShape

    lastName: string
    get(key: 'lastName', defaultValue?: string): string
    set(key: 'lastName', value: string): ProfileRecordShape

    avatar: AvatarRecord
    get(key: 'avatar', defaultValue?: AvatarRecord): AvatarRecord
    set(key: 'avatar', value: AvatarRecord): ProfileRecordShape

    theme: enums.Theme
    get(key: 'theme', defaultValue?: enums.Theme): enums.Theme
    set(key: 'theme', value: enums.Theme): ProfileRecordShape

    events: events.EventEmitter
    get(key: 'events', defaultValue?: events.EventEmitter): events.EventEmitter
    set(key: 'events', value: events.EventEmitter): ProfileRecordShape


    get(key: string, defaultValue?: any): any;
    set(key: string, value: typeof undefined): ProfileRecordShape;

    toJS(): Profile
}


/**
 * Default fields that must be provided in ProfileRecord.
 */
export interface ProfileRecordDefaults {
    firstName: string
    lastName: string
    avatar: AvatarRecord
    theme: enums.Theme
    events: events.EventEmitter
}

/**
 * Typed ProfileRecord constructor.
 */
export let ProfileRecordCtor: RecordCtor<ProfileRecordDefaults, ProfileRecordShape> = Immutable.Record as any;

/**
 * Special method to parse ProfileRecord with all the dependencies.
 */
export function parseProfileRecord(value: Profile, deps: any): ProfileRecordShape {
    var recordWalker = function(value, key) {
        switch (true) {

            case key == 'avatar':
                if (value != null) {
                    return deps.AvatarRecord.fromJS(value, deps);
                } else {
                    return undefined;
                }

            default: return fromJSDefault(value);
        }
    };

    var result: any = {};
    for (var k in value) {
        if (value.hasOwnProperty) {
            result[k] = recordWalker(value[k], k);
        }
    }

    return new deps.ProfileRecord(result);
}

export class ProfileRecord extends ProfileRecordCtor({
    firstName: null,
    lastName: null,
    avatar: null,
    theme: null,
    events: null,
}) {
    static fromJS(value: Profile, deps: any): ProfileRecord {
        return parseProfileRecord(value, deps)
    }
}

export let allRecords = {
    AvatarRecord,
    ProfileRecord,
}

export interface RecordClass<T extends Immutable.Map<string, void>> {
    new (): T;
    new (values: T): T;
}

export interface RecordCtor<R, T extends Immutable.Map<string, any>> {
    (defaultValues: T | R, name?: string): RecordClass<T>
}

function fromJSDefault(json) {
    if (Array.isArray(json)) {
        return (Immutable.Seq as any).Indexed(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
        return (Immutable.Seq as any).Keyed(json).map(fromJSDefault).toMap();
    }
    return json;
}

function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
}

export interface ImmutableMethods<K, V, T extends Immutable.Map<any, any>> extends Immutable.Map<K, V> {
    /**
     * Returns a new Map which excludes this `key`.
     *
     * Note: `delete` cannot be safely used in IE8, but is provided to mirror
     * the ES6 collection API.
     * @alias remove
     */
    delete(key: K): T;
    remove(key: K): T;

    /**
     * Returns a new Map containing no keys or values.
     */
    clear(): T;

    /**
     * Returns a new Map having updated the value at this `key` with the return
     * value of calling `updater` with the existing value, or `notSetValue` if
     * the key was not set. If called with only a single argument, `updater` is
     * called with the Map itself.
     *
     * Equivalent to: `map.set(key, updater(map.get(key, notSetValue)))`.
     */
    update(updater: (value: T) => T): T;
    update(key: K, updater: (value: V) => V): T;
    update(key: K, notSetValue: V, updater: (value: V) => V): T;

    /**
     * Returns a new Map resulting from merging the provided Iterables
     * (or JS objects) into this Map. In other words, this takes each entry of
     * each iterable and sets it on this Map.
     *
     * If any of the values provided to `merge` are not Immutable.Iterable (would return
     * false for `Immutable.isIterable`) then they are deeply converted via
     * `Immutable.fromJS` before being merged. However, if the value is an
     * Immutable.Iterable but includes non-iterable JS objects or arrays, those nested
     * values will be preserved.
     *
     *     var x = Immutable.Map({a: 10, b: 20, c: 30});
     *     var y = Immutable.Map({b: 40, a: 50, d: 60});
     *     x.merge(y) // { a: 50, b: 40, c: 30, d: 60 }
     *     y.merge(x) // { b: 20, a: 10, d: 60, c: 30 }
     *
     */
    merge(...iterables: Immutable.Iterable<K, V>[]): T;
    merge(...iterables: { [key: string]: V }[]): Immutable.Map<string, V>;

    /**
     * Like `merge()`, `mergeWith()` returns a new Map resulting from merging
     * the provided Iterables (or JS objects) into this Map, but uses the
     * `merger` function for dealing with conflicts.
     *
     *     var x = Immutable.Map({a: 10, b: 20, c: 30});
     *     var y = Immutable.Map({b: 40, a: 50, d: 60});
     *     x.mergeWith((prev, next) => prev / next, y) // { a: 0.2, b: 0.5, c: 30, d: 60 }
     *     y.mergeWith((prev, next) => prev / next, x) // { b: 2, a: 5, d: 60, c: 30 }
     *
     */
    mergeWith(
        merger: (previous?: V, next?: V, key?: K) => V,
        ...iterables: Immutable.Iterable<K, V>[]
    ): T;
    mergeWith(
        merger: (previous?: V, next?: V, key?: K) => V,
        ...iterables: { [key: string]: V }[]
    ): Immutable.Map<string, V>;

    /**
     * Like `merge()`, but when two Iterables conflict, it merges them as well,
     * recursing deeply through the nested data.
     *
     *     var x = Immutable.fromJS({a: { x: 10, y: 10 }, b: { x: 20, y: 50 } });
     *     var y = Immutable.fromJS({a: { x: 2 }, b: { y: 5 }, c: { z: 3 } });
     *     x.mergeDeep(y) // {a: { x: 2, y: 10 }, b: { x: 20, y: 5 }, c: { z: 3 } }
     *
     */
    mergeDeep(...iterables: Immutable.Iterable<K, V>[]): T;
    mergeDeep(...iterables: { [key: string]: V }[]): Immutable.Map<string, V>;

    /**
     * Like `mergeDeep()`, but when two non-Iterables conflict, it uses the
     * `merger` function to determine the resulting value.
     *
     *     var x = Immutable.fromJS({a: { x: 10, y: 10 }, b: { x: 20, y: 50 } });
     *     var y = Immutable.fromJS({a: { x: 2 }, b: { y: 5 }, c: { z: 3 } });
     *     x.mergeDeepWith((prev, next) => prev / next, y)
     *     // {a: { x: 5, y: 10 }, b: { x: 20, y: 10 }, c: { z: 3 } }
     *
     */
    mergeDeepWith(
        merger: (previous?: V, next?: V, key?: K) => V,
        ...iterables: Immutable.Iterable<K, V>[]
    ): T;
    mergeDeepWith(
        merger: (previous?: V, next?: V, key?: K) => V,
        ...iterables: { [key: string]: V }[]
    ): Immutable.Map<string, V>;


    // Deep persistent changes

    /**
     * Returns a new Map having set `value` at this `keyPath`. If any keys in
     * `keyPath` do not exist, a new immutable Map will be created at that key.
     */
    setIn(keyPath: Array<any>, value: any): T;
    setIn(KeyPath: Immutable.Iterable<any, any>, value: any): T;

    /**
     * Returns a new Map having removed the value at this `keyPath`. If any keys
     * in `keyPath` do not exist, no change will occur.
     *
     * @alias removeIn
     */
    deleteIn(keyPath: Array<any>): T;
    deleteIn(keyPath: Immutable.Iterable<any, any>): T;
    removeIn(keyPath: Array<any>): T;
    removeIn(keyPath: Immutable.Iterable<any, any>): T;

    /**
     * Returns a new Map having applied the `updater` to the entry found at the
     * keyPath.
     *
     * If any keys in `keyPath` do not exist, new Immutable `Map`s will
     * be created at those keys. If the `keyPath` does not already contain a
     * value, the `updater` function will be called with `notSetValue`, if
     * provided, otherwise `undefined`.
     *
     *     var data = Immutable.fromJS({ a: { b: { c: 10 } } });
     *     data = data.updateIn(['a', 'b', 'c'], val => val * 2);
     *     // { a: { b: { c: 20 } } }
     *
     * If the `updater` function returns the same value it was called with, then
     * no change will occur. This is still true if `notSetValue` is provided.
     *
     *     var data1 = Immutable.fromJS({ a: { b: { c: 10 } } });
     *     data2 = data1.updateIn(['x', 'y', 'z'], 100, val => val);
     *     assert(data2 === data1);
     *
     */
    updateIn(
        keyPath: Array<any>,
        updater: (value: any) => any
    ): T;
    updateIn(
        keyPath: Array<any>,
        notSetValue: any,
        updater: (value: any) => any
    ): T;
    updateIn(
        keyPath: Immutable.Iterable<any, any>,
        updater: (value: any) => any
    ): T;
    updateIn(
        keyPath: Immutable.Iterable<any, any>,
        notSetValue: any,
        updater: (value: any) => any
    ): T;

    /**
     * A combination of `updateIn` and `merge`, returning a new Map, but
     * performing the merge at a point arrived at by following the keyPath.
     * In other words, these two lines are equivalent:
     *
     *     x.updateIn(['a', 'b', 'c'], abc => abc.merge(y));
     *     x.mergeIn(['a', 'b', 'c'], y);
     *
     */
    mergeIn(
        keyPath: Immutable.Iterable<any, any>,
        ...iterables: Immutable.Iterable<K, V>[]
    ): T;
    mergeIn(
        keyPath: Array<any>,
        ...iterables: Immutable.Iterable<K, V>[]
    ): T;
    mergeIn(
        keyPath: Array<any>,
        ...iterables: { [key: string]: V }[]
    ): Immutable.Map<string, V>;

    /**
     * A combination of `updateIn` and `mergeDeep`, returning a new Map, but
     * performing the deep merge at a point arrived at by following the keyPath.
     * In other words, these two lines are equivalent:
     *
     *     x.updateIn(['a', 'b', 'c'], abc => abc.mergeDeep(y));
     *     x.mergeDeepIn(['a', 'b', 'c'], y);
     *
     */
    mergeDeepIn(
        keyPath: Immutable.Iterable<any, any>,
        ...iterables: Immutable.Iterable<K, V>[]
    ): T;
    mergeDeepIn(
        keyPath: Array<any>,
        ...iterables: Immutable.Iterable<K, V>[]
    ): T;
    mergeDeepIn(
        keyPath: Array<any>,
        ...iterables: { [key: string]: V }[]
    ): Immutable.Map<string, V>;


    // Transient changes

    /**
     * Every time you call one of the above functions, a new immutable Map is
     * created. If a pure function calls a number of these to produce a final
     * return value, then a penalty on performance and memory has been paid by
     * creating all of the intermediate immutable Maps.
     *
     * If you need to apply a series of mutations to produce a new immutable
     * Map, `withMutations()` creates a temporary mutable copy of the Map which
     * can apply mutations in a highly performant manner. In fact, this is
     * exactly how complex mutations like `merge` are done.
     *
     * As an example, this results in the creation of 2, not 4, new Maps:
     *
     *     var map1 = Immutable.Map();
     *     var map2 = map1.withMutations(map => {
     *       map.set('a', 1).set('b', 2).set('c', 3);
     *     });
     *     assert(map1.size === 0);
     *     assert(map2.size === 3);
     *
     * Note: Not all methods can be used on a mutable collection or within
     * `withMutations`! Only `set` and `merge` may be used mutatively.
     *
     */
    withMutations(mutator: (mutable: T) => any): T;

    /**
     * Another way to avoid creation of intermediate Immutable maps is to create
     * a mutable copy of this collection. Mutable copies *always* return `this`,
     * and thus shouldn't be used for equality. Your function should never return
     * a mutable copy of a collection, only use it internally to create a new
     * collection. If possible, use `withMutations` as it provides an easier to
     * use API.
     *
     * Note: if the collection is already mutable, `asMutable` returns itself.
     *
     * Note: Not all methods can be used on a mutable collection or within
     * `withMutations`! Only `set` and `merge` may be used mutatively.
     */
    asMutable(): T;

    /**
     * The yin to `asMutable`'s yang. Because it applies to mutable collections,
     * this operation is *mutable* and returns itself. Once performed, the mutable
     * copy has become immutable and can be safely returned from a function.
     */
    asImmutable(): T;
}

