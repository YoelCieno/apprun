import app from '../../index-jsx'
import Store from './store';

var startTime;
var lastMeasure;
var startMeasure = function(name) {
    startTime = performance.now();
    lastMeasure = name;
}
var stopMeasure = function() {
    window.setTimeout(function() {
        var stop = performance.now();
        console.log(lastMeasure+" took "+(stop - startTime));
    }, 0);
}

const store = new Store();

const update = {
    '#benchmark': (store) => store,

    run(store) {
        store.run();
        return store;
    },

    add(store) {
        store.add();
        return store;
    },

    remove(store, id) {
        if (id == store.selected) this.unselect(store);
        store.delete(id);
        return store;
    },

    select(store, id) {
        this.unselect(store);
        store.select(id);
        return store;
    },

    update(store) {
        store.update();
        return store;
    },

    runlots(store) {
        store.runLots();
        return store;
    },

    clear(store) {
        store.clear();
        return store;
    },

    swaprows(store) {
        this.unselect(store);
        store.swapRows();
        return store;
    },

    unselect(store) {
        store.selected = null;
    }
}

const view = (model) => {
    const rows = model.data.map((curr) => {
        const selected = curr.id == model.selected ? 'danger' : '';
        const id = curr.id;
        return <tr className={selected} id={id}>
            <td className="col-md-1">{id}</td>
            <td className="col-md-4">
                <a className="lbl">{curr.label}</a>
            </td>
            <td className="col-md-1">
                <a className="remove">
                    <span className="glyphicon glyphicon-remove remove" aria-hidden="true"></span>
                </a>
            </td>
            <td className="col-md-6"></td>
        </tr>;
    });

    return <div>
      <div>
        <button type='button' id='run'>Create 1,000 rows</button>
        <button type='button' id='runlots'>Create 10,000 rows</button>
        <button type='button' id='add'>Append 1,000 rows</button>
        <button type='button' id='update'>Update every 10th row</button>
        <button type='button' id='clear'>Clear</button>
        <button type='button' id='swaprows'>Swap Rows</button>
    </div>

    <table className="table table-hover table-striped test-data" id="main-table">
        <tbody>{rows}</tbody>
    </table>
    </div>
}

const getId = (elem) => {
    while (elem) {
        if (elem.tagName === "TR") {
            return elem.id;
        }
        elem = elem.parentNode;
    }
    return undefined;
}

document.body.addEventListener('click', e => {
    const t = e.target as HTMLElement;
    if (!t) return;
    if (t.tagName === 'BUTTON') {
        e.preventDefault();
        startMeasure(t.id);
        app.run(t.id);
        stopMeasure();
    } else if (t.matches('.remove')) {
        e.preventDefault();
        startMeasure('remove');
        app.run('remove', getId(t));
        stopMeasure();
    } else if (t.matches('.lbl')) {
        e.preventDefault();
        startMeasure('select');
        app.run('select', getId(t));
        stopMeasure();
    }
});

export default (element) => app.start(element, store, view, update);