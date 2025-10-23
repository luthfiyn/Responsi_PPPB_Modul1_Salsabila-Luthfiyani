const supabase = require('../db/supabase');
const TABLE = 'shoewash';

async function getAllItems(status) {
  let query = supabase.from(TABLE).select('*').order('created_at', { ascending: false });
  if (status) query = query.ilike('status', status);
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
}

async function getItemById(id) {
  const { data, error } = await supabase.from(TABLE).select('*').eq('id', id).single();
  if (error) throw new Error(error.message);
  return data;
}

async function createItem({ name, owner, status = 'Proses', notes }) {
  const payload = { name, owner, status, notes };
  const { data, error } = await supabase.from(TABLE).insert(payload).select().single();
  if (error) throw new Error(error.message);
  return data;
}

async function updateItem(id, updates) {
  const { data, error } = await supabase
    .from(TABLE)
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

async function deleteItem(id) {
  const { error } = await supabase.from(TABLE).delete().eq('id', id);
  if (error) throw new Error(error.message);
  return true;
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};
