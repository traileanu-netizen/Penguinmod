/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
(async function(Scratch) {
    const variables = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    const ExtForge = {
        Broadcasts: new function() {
            this.raw_ = {};
            this.register = (name, blocks) => {
                this.raw_[name] = blocks;
            };
            this.execute = async (name) => {
                if (this.raw_[name]) {
                    await this.raw_[name]();
                };
            };
        },

        Variables: new function() {
            this.raw_ = {};
            this.set = (name, value) => {
                this.raw_[name] = value;
            };
            this.get = (name) => {
                return this.raw_[name] ?? null;
            }
        },

        Vector: class {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static from(v) {
                if (v instanceof ExtForge.Vector) return v
                if (v instanceof Array) return new ExtForge.Vector(Number(v[0]), Number(v[1]))
                if (v instanceof Object) return new ExtForge.Vector(Number(v.x), Number(v.y))
                return new ExtForge.Vector()
            }

            add(v) {
                return new Vector(this.x + v.x, this.y + v.y);
            }

            set(x, y) {
                return new Vector(x ?? this.x, y ?? this.y)
            }
        },

        Utils: {
            setList: (list, index, value) => {
                [...list][index] = value;
                return list;
            },
            lists_foreach: {
                index: [0],
                value: [null],
                depth: 0
            },
            countString: (x, y) => {
                return y.length == 0 ? 0 : x.split(y).length - 1
            }
        }
    }

    class Extension {
        getInfo() {
            return {
                "id": "CoolExtansionID",
                "name": "Cool stuff",
                "color1": "#0000f2",
                "blocks": [{
                    "opcode": "block_a634798960a735e8",
                    "text": "Percentage Of To happen [7bba7a7596a2f90d]",
                    "blockType": "Boolean",
                    "arguments": {
                        "7bba7a7596a2f90d": {
                            "type": "number",
                            "defaultValue": 50
                        }
                    }
                }, {
                    "opcode": "block_9b3af61de5764856",
                    "text": "π",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_12f68e34a118c0cc",
                    "text": "Start project",
                    "blockType": "command",
                    "arguments": {}
                }, {
                    "opcode": "block_2285fb88d00927da",
                    "text": "Stop project",
                    "blockType": "command",
                    "arguments": {}
                }, {
                    "opcode": "block_c74672f7bfc7fce6",
                    "text": "alert [fb1ceddeb6da4b1e]",
                    "blockType": "command",
                    "arguments": {
                        "fb1ceddeb6da4b1e": {
                            "type": "string",
                            "defaultValue": "Hi"
                        }
                    }
                }, {
                    "opcode": "block_fb85d3ad55bf9068",
                    "text": "freeze the page FOREVER",
                    "blockType": "command",
                    "arguments": {}
                }, {
                    "opcode": "block_28d3d0883a04ff31",
                    "text": "Advanced percentage of to happend Min: [e2b37156af593f8e] Max: [b352fa25e8c97603]",
                    "blockType": "Boolean",
                    "arguments": {
                        "e2b37156af593f8e": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "b352fa25e8c97603": {
                            "type": "number",
                            "defaultValue": 50
                        }
                    }
                }]
            }
        }
        async block_a634798960a735e8(args) {
            if ((vm.runtime.ext_scratch3_operators._random((0), (100000)) < (args["7bba7a7596a2f90d"] * (1000)))) {
                return (("true"))
            } else {
                return (("false"))
            };
        }
        async block_9b3af61de5764856(args) {
            return (Math.PI)
        }
        async block_12f68e34a118c0cc(args) {
            Scratch.vm.greenFlag();
        }
        async block_2285fb88d00927da(args) {
            Scratch.vm.stopAll();
        }
        async block_c74672f7bfc7fce6(args) {
            eval(String.prototype.concat(String.prototype.concat(String("alert(\""), args["fb1ceddeb6da4b1e"]), String("\")")))
        }
        async block_fb85d3ad55bf9068(args) {
            eval(("while(true) {   } "))
        }
        async block_28d3d0883a04ff31(args) {
            ExtForge.Variables.set("Debug", vm.runtime.ext_scratch3_operators._random((1), (100000)))
            if (((Number(ExtForge.Variables.get("Debug")) <= (args["b352fa25e8c97603"] * (1000))) && (Number(ExtForge.Variables.get("Debug")) >= (args["e2b37156af593f8e"] * (1000))))) {
                return (("true"))
            } else {
                return (("false"))
            };
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);
