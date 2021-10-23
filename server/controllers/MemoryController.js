const MemoryModel = require('../models/MemoryModel');

/**
 * Get All Memories
 * @param request
 * @param response
 * @param next
 * @returns {Promise<void>}
 */
const getAll = async function(request, response, next) {
    try {
        const memories = await MemoryModel.find({});
        if(memories.length > 0) {
            await response.status(200).json({
                status: 200,
                data: memories,
                result: 'OK'
            });
        } else {
            await response.status(404).json({
                status: 404,
                data: [],
                result: 'FAIL'
            });
        }
    }catch(err) {
        throw err;
    }
}

/**
 * Get a memory by id
 * @param request
 * @param response
 * @param next
 * @returns {Promise<void>}
 */
const getById = async function(request, response, next) {
    try {
        const id = request.params.id;
        const memory = await MemoryModel.find({_id: id});
        if(memory.length > 0) {
            await response.status(200).json({
                status: 200,
                data: memory,
                result: 'OK'
            });
        } else {
            await response.status(404).json({
                status: 404,
                data: [],
                result: 'FAIL'
            });
        }
    }catch(err) {
        throw err;
    }
}

/**
 * Add a new memory
 * @param request
 * @param response
 * @param next
 * @returns {Promise<void>}
 */
const add = async function(request, response, next) {
    try {
        const {title, content, creator, image} = request.body;
        const memory = new MemoryModel({title, content, creator, image});
        await memory.save();
        await response.status(201).json({
            status: 201,
            data: memory,
            result: 'OK'
        })
    }catch(err) {
        throw err;
    }
}

/**
 * Update a memory by new values
 * @param request
 * @param response
 * @param next
 * @returns {Promise<void>}
 */
const update = async function(request, response, next) {
    try {
        const id = request.params.id;
        const {title, content, creator, image} = request.body;
        const updatedMemory = await MemoryModel.findByIdAndUpdate(id, {title, content, creator, image}, {new: true});

        await response.status(200).json({
            status: 200,
            data: updatedMemory,
            result: 'OK'
        })
    }catch(err) {
        throw err;
    }
}

/**
 * Remove a memory by id
 * @param request
 * @param response
 * @param next
 * @returns {Promise<void>}
 */
const remove = async function(request, response, next) {
    try {
        const id = request.params.id;
        const deleteMemory = await MemoryModel.findByIdAndRemove(id);
        await response.status(200).json({
            status: 200,
            data: deleteMemory,
            result: 'OK'
        })
    }catch(err) {
        throw err;
    }
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    remove
}
